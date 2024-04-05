// src/contexts/UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc, serverTimestamp, setDoc } from "firebase/firestore";
import '../config/firestore.jsx'; // Ensure Firebase is initialized

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("UserContext loaded");

  // Additional state for managing errors
  const [error, setError] = useState(null);

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
            setUserDetails({ uid: authUser.uid, ...userDoc.data() });
          } else {
            console.error("User document does not exist. Creating a new one...");
            await setDoc(userRef, {
              isAdmin: false,
              lastLogin: serverTimestamp()
            });
            setUserDetails({
              uid: authUser.uid,
              isAdmin: false,
              lastLogin: serverTimestamp()
            });
          }
        } catch (e) {
          console.error("Error managing user document:", e);
          setError(e); // Set error state
        }
      } else {
        setUserDetails(null); // No user signed in
      }
      setUser(authUser);
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);  

  return (
    <UserContext.Provider value={{ user, userDetails, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;