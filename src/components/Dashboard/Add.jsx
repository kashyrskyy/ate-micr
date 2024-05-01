// Add.jsx
import React, { useState, useMemo } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material';

import { useUser } from '../../contexts/UserContext';

import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore"; 
import { db } from '../../config/firestore'

import ImageUpload from './ImageUpload'; 
import TextEditor from './TextEditor'; 
import FileUpload from './FileUpload'; 

const Add = ({ designs, setDesigns, setIsAdding, getDesigns, onReturnToDashboard }) => {
  const { userDetails } = useUser();

  console.log("Add Design loaded");

  const [description, setDesignDescription] = useState('');
  
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');

  const [images, setImages] = useState([]); // This now handles multiple images
  const [files, setFiles] = useState([]);  // State for storing file information

  const initialImagesMemo = useMemo(() => images, [images]);

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
  
  const saveDesign = async (e) => {
    e.preventDefault();
    console.log("Files to be saved:", files);

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

    const filteredImages = images.filter(img => !img.deleted); // Only save images that aren't marked as deleted

    const filteredFiles = files.filter(file => !file.deleted).map(file => ({
      id: file.id,
      url: file.url,
      name: file.name,
      path: file.path
    }));
  
    const newDesign = {
      title: title,
      description: description,
      dateDue: Timestamp.fromDate(new Date(date)),
      dateCreated: serverTimestamp(),
      images: filteredImages, // Pass filtered images
      files: filteredFiles,  // Only include non-deleted files
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
      setImages([]);
      setFiles([]);  // Reset the files state
    } catch (error) {
      console.log(error);
      setDialogContent('There was an issue adding your design.');
      setDialogOpen(true);
    }
  };
  
  return (
    <div className="small-container">
      <button onClick={onReturnToDashboard} className="muted-button margin-top-20">← All Designs</button>
      <div className="design-record">
        <form onSubmit={saveDesign}>
          <h1 className="designHeader">New Design</h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flexGrow: 8, marginRight: '12px' }}>
              <label className="designTitles" htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                style={{ width: '100%' }} // Make sure the input fills the div        
              />
            </div>
            <div style={{ flexGrow: 2 }}>
              <label className="designTitles" htmlFor="dateDue">Date</label>
              <input
                id="date"
                type="date" // Make sure this is set to 'date'
                name="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                style={{ width: '100%' }} // Make sure the input fills the div
              />
            </div>
          </div>
          <label className="designTitles" htmlFor="description">Description</label>
          <ul>
              <li>Objective: What is the goal for this design?</li>
              <li>Rationale: Why is this new design being done?</li>
              <li>Selected Target Identified: What is the target for the design being made?</li>
              <li>Functional Modification: What is being done to this target?</li>
              <li>Overview/Plan for making the modification: What are the steps to be carried out to meet the objective?</li>
          </ul>
          <TextEditor onChange={setDesignDescription} /> {/* Use TextEditor for description */}
          <ImageUpload 
            path="designs/images"
            initialImages={initialImagesMemo}
            onImagesUpdated={setImages}
          />
          <FileUpload  // Include the FileUpload component in the form
            path="designs/files" 
            initialFiles={files}
            onFilesChange={setFiles} // Ensure this is correctly passed and used
          />
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              type="submit" 
              variant="contained"
              sx={{ 
                fontSize: '1rem',
                mt: 2, 
                textTransform: 'none',
                // Define a minimum width or width if necessary
                // Apply a box-shadow for hover effect instead of changing border or size
                boxShadow: 'none', // No box-shadow initially
                '&:hover': {
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
                  // Use transform for visual feedback without layout shift
                  transform: 'scale(1.05)',
                },
                // Transition for the transform property for smooth effect
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                // Prevent layout shift by applying a transparent border
                border: '1px solid transparent',
              }}
            >
              Add
            </Button>
            <Button 
              onClick={() => setIsAdding(false)} 
              style={{ marginLeft: '12px' }} 
              variant="outlined"
              sx={{ 
                fontSize: '1rem',
                mt: 2, 
                textTransform: 'none',
                color: 'currentColor', // Ensures the font color stays the same
                borderColor: 'rgba(255, 0, 0, 0.5)', // Lighter red border for the default state
                boxShadow: 'none', // No box-shadow initially
                '&:hover': {
                  borderColor: 'rgba(255, 0, 0, 0.7)', // Slightly darker red border on hover
                  backgroundColor: 'rgba(255, 0, 0, 0.1)', // Light red background on hover
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
                  color: 'currentColor', // Ensure the text color remains the same
                  transform: 'scale(1.05)', // Transform effect on hover
                },
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out',
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
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