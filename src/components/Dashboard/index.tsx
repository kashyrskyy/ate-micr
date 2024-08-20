// Dashboard/index.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useUser } from '../../contexts/UserContext';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Snackbar, Alert, TextField } from '@mui/material';

import { collection, query, where, getDocs, doc, deleteDoc, orderBy } from "firebase/firestore";
import { db } from '../../config/firestore';

import Header from './Header';
import NotebookTable from './NotebookTable';
import Add from './Add';
import Edit from './Edit';

import { Design } from '../../types/types';

const Dashboard = () => {
  const { userDetails, loading } = useUser();

  console.log("Dashboard loaded");

  const [adminDesigns, setAdminDesigns] = useState<Design[]>([]); // State for admin's designs
  const [userDesigns, setUserDesigns] = useState<Design[]>([]); // State for other users' designs
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null); // Updated type for selectedDesign state
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // State for Dialog and Snackbar
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  // New states for user ID confirmation logic
  const [userIdForConfirmation, setUserIdForConfirmation] = useState('');
  const [userIdConfirmationDialogOpen, setUserIdConfirmationDialogOpen] = useState(false);
  const [pendingDeleteDesignId, setPendingDeleteDesignId] = useState<string | null>(null); // Added explicit type annotation

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info'); // Can be 'success', 'info', 'warning', 'error'

  const handleReturnToDashboard = () => {
    setIsEditing(false); // Resets editing state
    setIsAdding(false); // Resets adding state
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

    const querySnapshot = await getDocs(designsQuery || query(collection(db, "designs"))); // Provide default query
    const adminDesigns: Design[] = [];
    const userDesigns: Design[] = [];
    
    querySnapshot.forEach(doc => {
      const data = doc.data();
      const design = {
        id: doc.id,
        title: data.title,
        description: data.description,
        course: data.course, // Ensure course is included
        dateCreated: data.dateCreated,
        dateModified: data.dateModified,
        userId: data.userId,
        images: data.images || [],
        files: data.files || []
      } as Design;

      if (data.userId === userDetails?.uid) {
        adminDesigns.push(design);
      } else {
        userDesigns.push(design);
      }
    });

    setAdminDesigns(adminDesigns);
    setUserDesigns(userDesigns);
  }, [userDetails]);

  useEffect(() => {
    if (!loading && userDetails) {
      getDesigns();
    }
  }, [userDetails, loading, getDesigns]);  

  const handleEdit = (id: string) => {
    const design = [...adminDesigns, ...userDesigns].find(design => design.id === id);
    setSelectedDesign(design || null);
    setIsEditing(true);
  };

  const handleDelete = (designId: string) => {
    setPendingDeleteDesignId(designId); // Temporarily store the design ID for deletion
    setDialogContent('Are you sure you want to delete this design? This action cannot be undone.');
    setDialogOpen(true); // Open the initial confirmation dialog
  };

  const confirmDelete = async () => {
    // Ensure there's a designId to delete
    if (!pendingDeleteDesignId) return;

    if (userIdForConfirmation !== userDetails?.uid) {
      // User ID doesn't match, show error message and abort deletion
      setSnackbarMessage('User ID confirmation failed. Enter the correct User ID.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } else {
        // User ID matches, proceed with deletion
        try {
            // Query for builds associated with the design
            const buildsQuery = query(collection(db, "builds"), where("design_ID", "==", pendingDeleteDesignId), where("userId", "==", userDetails.uid));
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
            await deleteDoc(doc(db, "designs", pendingDeleteDesignId));

            // Update UI
            setAdminDesigns(prev => prev.filter(design => design.id !== pendingDeleteDesignId));
            setUserDesigns(prev => prev.filter(design => design.id !== pendingDeleteDesignId));

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
        } finally {
            // Reset states
            setUserIdForConfirmation('');
            setUserIdConfirmationDialogOpen(false);
            setPendingDeleteDesignId(null); // Clear the pending design ID
        }
      }
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          {userDetails?.isAdmin && (
            <>
              <h2>Admin Designs</h2>
              <NotebookTable
                designs={adminDesigns}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isAdmin={true}
                userDetails={userDetails} // Pass userDetails as a prop
                showUserIdColumn={true} // Show User ID column for admin designs
              />
              <h2>Users' Designs</h2>
              <NotebookTable
                designs={userDesigns}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isAdmin={false}
                userDetails={userDetails} // Pass userDetails as a prop
                showUserIdColumn={true} // Show User ID column for admin designs
              />
            </>
          )}
          {!userDetails?.isAdmin && (
            <NotebookTable
              designs={adminDesigns} // Regular users only see their designs
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              isAdmin={false}
              userDetails={userDetails} // Pass userDetails as a prop
              showUserIdColumn={false} // Do not show User ID column for regular users
            />
          )}
        </>
      )}
      {isAdding && (
        <Add
          designs={adminDesigns}
          setDesigns={setAdminDesigns}
          setIsAdding={setIsAdding}
          getDesigns={getDesigns}
          onReturnToDashboard={handleReturnToDashboard}
        />
      )}
      {isEditing && (
        <Edit
          designs={adminDesigns}
          selectedDesign={selectedDesign}
          setDesigns={setAdminDesigns}
          setIsEditing={setIsEditing}
          getDesigns={getDesigns}
          onReturnToDashboard={handleReturnToDashboard}
        />
      )}
      {/* Initial Deletion Confirmation Dialog */}
      <Dialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        PaperProps={{
          style: { minWidth: 500 }, // Adjust minWidth as needed
        }}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>No, cancel</Button>
          <Button onClick={() => {
            setUserIdConfirmationDialogOpen(true);
            setDialogOpen(false); // This should close the initial dialog and open the user ID confirmation dialog without delay.
          }} color="primary">
            Yes, delete it
          </Button>
        </DialogActions>
      </Dialog>
      {/* User ID Confirmation Dialog */}
      <Dialog 
        open={userIdConfirmationDialogOpen} 
        onClose={() => setUserIdConfirmationDialogOpen(false)}
        PaperProps={{
          style: { minWidth: 500 }, // Ensure this matches the first Dialog
        }}
      >
        <DialogTitle>Confirm Your User ID</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="userId-confirm"
            label="User ID"
            type="text"
            fullWidth
            variant="outlined"
            value={userIdForConfirmation}
            onChange={(e) => setUserIdForConfirmation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setUserIdConfirmationDialogOpen(false)}>No, cancel</Button>
          <Button onClick={confirmDelete} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {/* Snackbar for notifications */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity={snackbarSeverity as "info" | "error" | "success" | "warning" | undefined}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );  
};

export default React.memo(Dashboard);