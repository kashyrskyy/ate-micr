// AddTest.jsx
import React, { useState } from 'react';

import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../../config/firestore';

import { useUser } from '../../contexts/UserContext';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Snackbar, Alert } from '@mui/material';

import TextEditor from './TextEditor'; 
import ImageUpload from './ImageUpload'; // Import ImageUpload component
import FileUpload from './FileUpload'; // Import FileUpload component

const AddTest = ({ designId, buildId, refreshTests, setAddingTestIdForBuild }) => { 
  const [testTitle, setTestTitle] = useState('');
  const [testDescription, setTestDescription] = useState('');
  const [testResults, setTestResults] = useState('');
  const [testConclusions, setTestConclusions] = useState('');
  const [images, setImages] = useState([]); // State to store images
  const [files, setFiles] = useState([]); // State to store files

  const { userDetails } = useUser();

  console.log("AddTest loaded");

  // States for Dialog and Snackbar
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');

  const handleAddTest = async () => {
    if (!testDescription) {
      setDialogContent("Test description cannot be empty!");
      setDialogOpen(true);
      return;
    }

    try {
      await addDoc(collection(db, "tests"), {
        title: testTitle,
        build_ID: buildId,
        design_ID: designId,
        dateCreated: serverTimestamp(), 
        description: testDescription,
        results: testResults,
        conclusions: testConclusions,
        userId: userDetails.uid,
        images: images.map(img => ({ url: img.url, title: img.title })), // Include image URLs and titles
        files: files.map(file => ({ url: file.url, name: file.name })) // Include file URLs and names
      });

      // Delay the rest of the operations to ensure the Snackbar is visible
      setTimeout(() => {
        refreshTests(buildId); // Refresh the list of tests
        setTestTitle(''); // Reset the title input field
        setTestDescription(''); // Reset the title description field
        setTestResults(''); // Reset the title results field
        setTestConclusions(''); // Reset the title conclusions field
        setImages([]); // Reset the images
        setFiles([]); // Reset the files
        setAddingTestIdForBuild(null); // Hide the input form if needed

        // Consider even redirecting or triggering other UI changes here
      }, 1000); // Adjust the delay as needed, but ensure it's slightly less than the Snackbar's autoHideDuration

      // Set and display the success message
      setSnackbarMessage("Test added successfully");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

    } catch (error) {
      console.error("Error adding test: ", error);

      setSnackbarMessage("Failed to add the test");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <div>
      <textarea
        placeholder="Test Title"
        value={testTitle}
        onChange={(e) => setTestTitle(e.target.value)}
        style={{ width: '100%', margin: '10px 0' }}
      />
      <label htmlFor="testDescription">Description</label>
      <TextEditor onChange={setTestDescription} /> {/* Use TextEditor for test description */}
      <label htmlFor="testResults">Results</label>
      <TextEditor onChange={setTestResults} /> {/* Use TextEditor for test results */}
      <label htmlFor="testConclusions">Conclusions</label>
      <TextEditor onChange={setTestConclusions} /> {/* Use TextEditor for test description */}
      <ImageUpload 
        path={`tests/${buildId}/images`} 
        images={images}
        setImages={setImages}
      />
      <FileUpload 
        path={`tests/${buildId}/files`} 
        files={files}
        setFiles={setFiles}
      />
      <div className="flex-space-between">
        <button onClick={handleAddTest} className="button muted-button">Save</button>
        <button onClick={() => setAddingTestIdForBuild(null)} className="button muted-button">Cancel</button> 
      </div>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>{"Notification"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddTest;
