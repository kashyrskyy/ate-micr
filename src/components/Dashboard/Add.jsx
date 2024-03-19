import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore"; 
import { db } from '../../config/firestore'

import ImageUpload from './ImageUpload'; 

const Add = ({ designs, setDesigns, setIsAdding, getDesigns, user }) => {
  const [description, setDesignDescription] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageStoragePath, setImageStoragePath] = useState('');
  const [imageTitle, setImageTitle] = useState('');

  console.log('Add user:', user);
  
  const handleAdd = async (e) => {
    e.preventDefault();

    // Check if the user object is defined and has a uid property
    if (!user || !user.uid) {
      console.error("User object is undefined or missing UID.");
      // Inform the user that authentication is needed
      Swal.fire({
        icon: 'error',
        title: 'Authentication Required',
        text: 'You must be signed in to add a design.',
        showConfirmButton: true,
      });
      return; // Stop the function from proceeding further
    }
  
    if (!description || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }
  
    const newDesign = {
      title: title,
      description: description,
      dateDue: Timestamp.fromDate(new Date(date)),
      dateCreated: serverTimestamp(),
      imageUrl: imageUrl, // Include the image URL in the design document
      imageStoragePath: imageStoragePath, // Make sure this is being saved
      imageTitle: imageTitle, // Include the image title/description
      userId: user.uid, // Use the user's ID to associate the design with the user
    };     
  
    try {
      await addDoc(collection(db, "designs"), newDesign);
      setDesigns([...designs, newDesign]); // Update state correctly
      setIsAdding(false);
      getDesigns();
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${title} has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });

      // Resetting form states here
      setDesignDescription('');
      setTitle('');
      setDate('');
      setImageUrl('');
      setImageStoragePath('');
      setImageTitle('');
  
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to add!',
        text: 'There was an issue adding your design.',
        showConfirmButton: true,
      });
    }
  };
  
  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Create Design</h1>
        <label htmlFor="title" style={{ textDecoration: 'underline' }}>Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="description" style={{ textDecoration: 'underline' }}>Description</label>
        <ul>
            <li>Objective: What is the goal for this design?</li>
            <li>Rationale: Why is this new design being done?</li>
            <li>Selected Target Identified: What is the target for the design being made?</li>
            <li>Functional Modification: What is being done to this target?</li>
            <li>Overview/Plan for making the modification: What are the steps to be carried out to meet the objective?</li>
        </ul>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={e => setDesignDescription(e.target.value)}
          rows="10" // Adjust the number of rows to increase the size
          style={{ width: '100%' }} // Make the textarea full width
        ></textarea>
        <label htmlFor="file" style={{ textDecoration: 'underline' }}>Image</label>
        <ImageUpload 
          path="designs" 
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          imageStoragePath={imageStoragePath}
          setImageStoragePath={setImageStoragePath}
          imageTitle={imageTitle}
          setImageTitle={setImageTitle}
        />
        <label htmlFor="dateDue" style={{ textDecoration: 'underline' }}>Due Date</label>
        <input
          id="date"
          type="date" // Make sure this is set to 'date'
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;