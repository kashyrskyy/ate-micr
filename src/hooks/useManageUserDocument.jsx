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
      const userTemplate = {
        displayName: '',
        email: '',
        isAdmin: false,
      };

      try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          console.log("User document exists.");
          const userData = userDoc.data();
          const updates = {};
          let updateRequired = false;

          for (const key in userTemplate) {
            if (userData[key] === undefined) {
              updates[key] = userTemplate[key];
              updateRequired = true;
              console.log(`Field '${key}' is missing. Adding to updates.`);
            }
          }

          if (updateRequired) {
            updates['lastLogin'] = serverTimestamp();
            console.log("Updating user document with missing fields.");
            await updateDoc(userRef, updates);
          }

          setUserDetails({ ...user, ...userData, ...updates });
        } else {
          console.error("User document does not exist. Creating a new one...");
          await setDoc(userRef, { ...userTemplate, displayName: user.displayName || user.email, email: user.email, lastLogin: serverTimestamp() });
          setUserDetails({ ...user, ...userTemplate, lastLogin: new Date() });
        }
      } catch (error) {
        console.error("Error fetching, creating, or updating user details:", error);
        setUserDetails(user); // Use basic user info as fallback
      } finally {
        setLoading(false);
      }
    };

    manageUserDocument();
  }, [user]);

  return { userDetails, loading };
};

export default useManageUserDocument;