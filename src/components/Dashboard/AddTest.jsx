import React, { useState } from 'react';

import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../../config/firestore';

import useManageUserDocument from '../../hooks/useManageUserDocument'; // Adjust the import path as necessary

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Snackbar, Alert } from '@mui/material';

const AddTest = ({ designId, buildId, refreshTests, setAddingTestIdForBuild }) => { 
  const [testDescription, setTestDescription] = useState('');
  const [testResults, setTestResults] = useState('');
  const [testConclusions, setTestConclusions] = useState('');
  const { userDetails } = useManageUserDocument();

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
        build_ID: buildId,
        design_ID: designId,
        dateCreated: serverTimestamp(), 
        description: testDescription,
        results: testResults,
        conclusions: testConclusions,
        userId: userDetails.uid,
      });

      // Delay the rest of the operations to ensure the Snackbar is visible
      setTimeout(() => {
        refreshTests(buildId); // Refresh the list of tests
        setTestDescription('');
        setTestResults('');
        setTestConclusions('');
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
        placeholder="Describe the test"
        value={testDescription}
        onChange={(e) => setTestDescription(e.target.value)}
        rows="4" // Adjust rows as needed
        style={{ width: '100%' }} // Adjust width as needed
      ></textarea>
      <textarea
        placeholder="Test Results"
        value={testResults}
        onChange={(e) => setTestResults(e.target.value)}
        rows="4"
        style={{ width: '100%', margin: '10px 0' }}
      ></textarea>
      <textarea
        placeholder="Test Conclusions"
        value={testConclusions}
        onChange={(e) => setTestConclusions(e.target.value)}
        rows="4"
        style={{ width: '100%', margin: '10px 0' }}
      ></textarea>
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
