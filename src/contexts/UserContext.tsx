// src/contexts/UserContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAuth, onAuthStateChanged, User as FirebaseUser  } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc, serverTimestamp, setDoc } from "firebase/firestore";
import '../config/firestore.tsx'; // Ensure Firebase is initialized

interface UserDetails {
  uid: string;
  isAdmin?: boolean;
  isSuperAdmin?: boolean;
  lastLogin?: any; // You can further specify the type for date/time if needed
}

interface UserContextType {
  user: FirebaseUser | null;
  userDetails: UserDetails | null;
  loading: boolean;
  error: Error | null;
  isSuperAdmin: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  const [loading, setLoading] = useState(true);
  // Additional state for managing errors
  const [error, setError] = useState<Error | null>(null);

  console.log("UserContext loaded");

  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore();
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      setLoading(true);
      setError(null); // Reset error state on auth state change
  
      if (authUser) {
        const userRef = doc(db, "users", authUser.uid);
        try {
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            console.log("User document exists.");
            console.log('User is signed in with UID:', authUser.uid);
            await updateDoc(userRef, { lastLogin: serverTimestamp() });
            const data = userDoc.data() as UserDetails;
            setUserDetails({ ...data, uid: authUser.uid });
            setIsSuperAdmin(data.isSuperAdmin || false);
          } else {
            console.error("User document does not exist. Creating a new one...");
            await setDoc(userRef, {
              isAdmin: false,
              isSuperAdmin: false,
              lastLogin: serverTimestamp()
            });
            setUserDetails({
              uid: authUser.uid,
              isAdmin: false,
              lastLogin: serverTimestamp()
            });
            setIsSuperAdmin(false);
          }
        } catch (e) {
          console.error("Error managing user document:", e);
          setError(e instanceof Error ? e : new Error("Failed to manage user document"));
        }
      } else {
        setUserDetails(null); // No user signed in
        setIsSuperAdmin(false);
      }
      setUser(authUser);
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);  

  return (
    <UserContext.Provider value={{ user, userDetails, loading, error, isSuperAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;