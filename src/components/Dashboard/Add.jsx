// Add.jsx
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material';

import { useUser } from '../../contexts/UserContext';

import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore"; 
import { db } from '../../config/firestore'

import ImageUpload from './ImageUpload'; 
import TextEditor from './TextEditor'; // Import TextEditor

const Add = ({ designs, setDesigns, setIsAdding, getDesigns, onReturnToDashboard }) => {
  const { userDetails } = useUser();

  console.log("Add Design loaded");

  const [description, setDesignDescription] = useState('');
  
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageStoragePath, setImageStoragePath] = useState('');
  const [imageTitle, setImageTitle] = useState('');

  // Newly added state variables for Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');

  // State for handling Dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  console.log('Adding New Design from user:', userDetails);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
  
  const handleAdd = async (e) => {
    e.preventDefault();

    // Check if the user object is defined and has a uid property
    if (!userDetails || !userDetails.uid) {
      console.error("User object is undefined or missing UID.");
      setDialogContent('You must be signed in to add a design.');
      setDialogOpen(true);
      return;
    }
  
    if (!description || !date) {
      setDialogContent('All fields are required.');
      setDialogOpen(true);
      return;
    }
  
    const newDesign = {
      title: title,
      description: description,
      dateDue: Timestamp.fromDate(new Date(date)),
      dateCreated: serverTimestamp(),
      imageUrl: imageUrl, // Include the image URL in the design document
      imageStoragePath: imageStoragePath, // Make sure this is being saved
      imageTitle: imageTitle, // Include the image title/description
      userId: userDetails.uid, // Use the user's ID to associate the design with the user
    };     
  
    try {
      await addDoc(collection(db, "designs"), newDesign);
      setDesigns([...designs, newDesign]); // Update state correctly
      // Assuming Snackbar state is set here
      setTimeout(() => {
        setIsAdding(false); // Or any other operation that might hide the Snackbar
        getDesigns();
      }, 1000); // Adjust delay as needed, but ensure it's at least as long as the Snackbar's autoHideDuration

      setSnackbarMessage(`${title} has been Added.`);
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      
      // Resetting form states here
      setTitle('');
      setDesignDescription('');
      setDate('');
      setImageUrl('');
      setImageStoragePath('');
      setImageTitle('');
  
    } catch (error) {
      console.log(error);
      setDialogContent('There was an issue adding your design.');
      setDialogOpen(true);
    }
  };
  
  return (
    <div className="small-container">
      <button onClick={onReturnToDashboard} className="muted-button margin-top-20">← All Designs</button>
      <form onSubmit={handleAdd}>
        <h1>Create Design</h1>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <ul>
            <li>Objective: What is the goal for this design?</li>
            <li>Rationale: Why is this new design being done?</li>
            <li>Selected Target Identified: What is the target for the design being made?</li>
            <li>Functional Modification: What is being done to this target?</li>
            <li>Overview/Plan for making the modification: What are the steps to be carried out to meet the objective?</li>
        </ul>
        <TextEditor onChange={setDesignDescription} /> {/* Use TextEditor for description */}
        <label htmlFor="file">Image</label>
        <ImageUpload 
          path="designs" 
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          imageStoragePath={imageStoragePath}
          setImageStoragePath={setImageStoragePath}
          imageTitle={imageTitle}
          setImageTitle={setImageTitle}
          onDelete={() => {
            // Since there's no design document yet, just reset the related state.
            setImageUrl('');
            setImageStoragePath('');
            setImageTitle('');
          }}
        />
        <label htmlFor="dateDue">Due Date</label>
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
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Notification"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbarOpen} autoHideDuration={1000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Add;