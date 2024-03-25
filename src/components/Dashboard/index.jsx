// index.jsx
import React, { useState, useEffect, useCallback } from 'react';
import useManageUserDocument from '../../hooks/useManageUserDocument'; 

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Snackbar, Alert } from '@mui/material';

import { collection, query, where, getDocs, doc, deleteDoc, orderBy } from "firebase/firestore";
import { db } from '../../config/firestore';

import Header from './Header';
import NotebookTable from './NotebookTable';
import Add from './Add';
import Edit from './Edit';

const Dashboard = () => {
  const { userDetails, loading } = useManageUserDocument();
  const [designs, setDesigns] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // State for Dialog and Snackbar
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  const [dialogAction, setDialogAction] = useState(() => () => {});

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info'); // Can be 'success', 'info', 'warning', 'error'

  const handleReturnToDashboard = () => {
    setIsEditing(false);
    setSelectedDesign(null); // Optionally reset selected design
    getDesigns(); // Refresh designs if needed
  };

  const getDesigns = useCallback(async () => {
    let designsQuery;
    if (userDetails && userDetails.isAdmin) {
      designsQuery = query(collection(db, "designs"), orderBy("dateCreated", "desc"));
    } else if (userDetails) {
      designsQuery = query(collection(db, "designs"), where("userId", "==", userDetails.uid), orderBy("dateCreated", "desc"));
    }

    const querySnapshot = await getDocs(designsQuery);
    const designs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setDesigns(designs);
  }, [userDetails]); 

  useEffect(() => {
    if (!loading && userDetails) {
      getDesigns();
    }
  }, [userDetails, loading, getDesigns]);  

  const handleEdit = id => {
    const [design] = designs.filter(design => design.id === id);

    setSelectedDesign(design);
    setIsEditing(true);
  };

  const handleDelete = async (designId) => {
    // Setup confirmation dialog
    const confirmDelete = async () => {
      setDialogOpen(false); // Close confirmation dialog
      try {
        // Query for builds associated with the design
        const buildsQuery = query(collection(db, "builds"), where("design_ID", "==", designId), where("userId", "==", userDetails.uid));
        const buildsSnapshot = await getDocs(buildsQuery);
  
        for (const buildDoc of buildsSnapshot.docs) {
          const buildId = buildDoc.id;
  
          // Query for tests associated with each build
          const testsQuery = query(collection(db, "tests"), where("build_ID", "==", buildId), where("userId", "==", userDetails.uid));
          const testsSnapshot = await getDocs(testsQuery);
  
          // Delete each test
          for (const testDoc of testsSnapshot.docs) {
            await deleteDoc(doc(db, "tests", testDoc.id));
          }
  
          // After deleting tests, delete the build
          await deleteDoc(doc(db, "builds", buildId));
        }
  
        // After deleting builds and their tests, delete the design
        await deleteDoc(doc(db, "designs", designId));
  
        // Update UI
        const updatedDesigns = designs.filter(design => design.id !== designId);
        setDesigns(updatedDesigns);
  
        // Show success message
        setSnackbarMessage('Your design and its associated builds and tests have been deleted.');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        console.error("Error deleting design, builds, and tests: ", error);
        // Show error message
        setSnackbarMessage('There was an issue deleting your design and its associated builds and tests.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    };
  
    // Open confirmation dialog
    setDialogContent('Are you sure? You won\'t be able to revert this!');
    setDialogAction(() => confirmDelete); // Assuming you have a mechanism to handle dialog actions
    setDialogOpen(true);
  };   

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <NotebookTable
            designs={designs}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            isAdmin={userDetails?.isAdmin ?? false} // Use optional chaining and provide a default value
          />
        </>
      )}
      {isAdding && (
        <Add
          designs={designs}
          setDesigns={setDesigns}
          setIsAdding={setIsAdding}
          getDesigns={getDesigns}
        />
      )}
      {isEditing && (
        <Edit
          designs={designs}
          selectedDesign={selectedDesign}
          setDesigns={setDesigns}
          setIsEditing={setIsEditing}
          getDesigns={getDesigns}
          onReturnToDashboard={handleReturnToDashboard}
        />
      )}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>No, cancel</Button>
          <Button onClick={() => {dialogAction(); setDialogOpen(false);}} color="primary" autoFocus>
            Yes, delete it
          </Button>
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

export default Dashboard;

