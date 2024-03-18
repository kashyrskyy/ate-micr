import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Login from './components/Login/index.jsx';
import Dashboard from './components/Dashboard';

// Assuming firebaseConfig.js is your Firebase configuration file
import './config/firestore.jsx';
import { getFirestore, doc, setDoc, updateDoc, getDoc, serverTimestamp } from "firebase/firestore";

const App = () => {
  const [user, setUser] = useState(null); // Maintain the user state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();

    // Define a template for the user document
    const userTemplate = {
      displayName: '', // Default display name if not provided
      email: '',       // Default email if not provided
      isAdmin: false,  // Default isAdmin
      // lastLogin: serverTimestamp(), // gets updated below when user loads the page
      // Add any other fields that should be present with their default values
    };

    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        console.log('User is signed in with UID:', authUser.uid);
        const userRef = doc(db, "users", authUser.uid);
        try {
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            console.log("User document exists.");
            const userData = userDoc.data();
            let updateRequired = false;
            const updates = {};

            // Compare user data against the template
            for (const key in userTemplate) {
              if (userData[key] === undefined) {
                updates[key] = userTemplate[key];
                updateRequired = true;
                console.log(`Field '${key}' is missing. Adding to updates.`);
              }
            }

            // If any fields are missing, update the document
            // Only set lastLogin during the update if other fields are missing
            if (updateRequired) {
              updates['lastLogin'] = serverTimestamp();
              console.log("Updating user document with missing fields.");
              await updateDoc(userRef, updates);
            }

            // Combine Auth user details with Firestore user document
            const userDetails = { ...authUser, ...userData, ...updates };
            setUser(userDetails);
          } else {
            console.error("User document does not exist. Creating a new one...");
            // When creating, set lastLogin to the current timestamp
            await setDoc(userRef, {
              ...userTemplate,
              displayName: authUser.displayName || authUser.email,
              email: authUser.email,
              lastLogin: serverTimestamp(),
            });
            // Create a new user document using the template
            setUser({ ...authUser, ...userTemplate, lastLogin: new Date() });
          }
        } catch (error) {
          console.error("Error fetching, creating, or updating user details:", error);
          setUser(authUser); // Fallback in case of error
        }
        
        // Update last login time after making sure the document exists or has been created/updated
        await updateDoc(userRef, {
          lastLogin: serverTimestamp(),
        });
        console.log("Updated 'lastLogin' time.")
        setLoading(false);
      } else {
        console.log('No user is signed in.');
        setUser(null);
        setLoading(false);
      }
    });     
    return () => unsubscribe();
  }, []); 
  
  // Then in your render method:
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user ? (
        <Dashboard user={user} />
      ) : (
        <Login />
      )}
    </>
  );  
};

export default App;