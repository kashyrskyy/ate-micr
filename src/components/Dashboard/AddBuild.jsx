import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../../config/firestore';

const AddBuild = ({ designId, setIsAddingBuild, refreshBuilds, user }) => {
  const [buildDescription, setBuildDescription] = useState('');

  console.log('AddBuild user:', user);

  const handleAddBuild = async (e) => {
    e.preventDefault();

    // Check if the user object is defined and has a uid property
    if (!user || !user.uid) {
      console.error("User object is undefined or missing UID.");
      // Inform the user that authentication is needed
      Swal.fire({
        icon: 'error',
        title: 'Authentication Required',
        text: 'You must be signed in to add a build.',
        showConfirmButton: true,
      });
      return;
    }

    if (!buildDescription) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Build description is required.',
        showConfirmButton: true,
      });
    }

    try {
      // Inside the handleAddBuild function or equivalent
      const docRef = await addDoc(collection(db, "builds"), {
        description: buildDescription,
        design_ID: designId,
        dateCreated: serverTimestamp(), 
        userId: user.uid, // Assuming you have access to the current user's UID
      });

      console.log("Build added with ID: ", docRef.id);
      console.log('AddBuild user:', user);

      // Assuming refreshBuilds is correctly passed as a prop, call it here
      await refreshBuilds();  

      Swal.fire({
        icon: 'success',
        title: 'Build Added!',
        text: 'Your build has been successfully added.',
        showConfirmButton: false,
        timer: 1500,
      });

      setBuildDescription(''); // Reset the input field
      setIsAddingBuild(false); // Optionally close the AddBuild component
    } catch (error) {
      console.error("Error adding build: ", error);
      if (error.code === "permission-denied") {
        Swal.fire({
          icon: 'error',
          title: 'Permission Denied',
          text: 'You do not have permission to perform this operation.',
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: `Failed to add the build. ${error.message}`,
          showConfirmButton: true,
        });
      }
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAddBuild}>
        <label htmlFor="buildDescription">Description</label>
        <textarea
          id="buildDescription"
          value={buildDescription}
          onChange={e => setBuildDescription(e.target.value)}
          rows="4"
          style={{ width: '100%' }}
        ></textarea>
        <div className="flex-space-between">
          <input type="submit" value="Save" className="button muted-button"/>
          <button onClick={() => setIsAddingBuild(false)} className="button muted-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddBuild;