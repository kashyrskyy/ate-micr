// src/hooks/useManageUserDocument.jsx
import { useEffect, useState } from 'react';
import { getFirestore, doc, setDoc, updateDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { useUser } from '../contexts/UserContext';

const useManageUserDocument = () => {
  const { user } = useUser();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
        console.log('No user is signed in.');
        setLoading(false);
        setUserDetails(null);
        return;
    }

    console.log('User is signed in with UID:', user.uid);

    const manageUserDocument = async () => {
        const db = getFirestore();
        const userRef = doc(db, "users", user.uid);

        try {
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
                console.log("User document exists.");

                // Always update lastLogin when the user logs in
                await updateDoc(userRef, { lastLogin: serverTimestamp() });

                // Combine existing user data with any new updates
                const userData = userDoc.data();
                setUserDetails({ uid: user.uid, ...userData });
            } else {
                console.error("User document does not exist. Creating a new one...");

                // Create a new user document with initial fields including lastLogin
                await setDoc(userRef, {
                    isAdmin: false, // default to false for new users
                    lastLogin: serverTimestamp()
                });
                
                // Set userDetails with the new user document data
                setUserDetails({
                    uid: user.uid,
                    isAdmin: false,
                    lastLogin: new Date() // Approximation until serverTimestamp is resolved
                });
            }
        } catch (error) {
            console.error("Error fetching, creating, or updating user details:", error);
            setUserDetails({ uid: user.uid }); // Use basic user info as fallback
        } finally {
            setLoading(false);
        }
    };

    manageUserDocument();
  }, [user]);
  
  return { userDetails, loading };
};

export default useManageUserDocument;