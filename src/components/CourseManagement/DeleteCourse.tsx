// src/components/CourseManagement/DeleteCourse.tsx

import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { getFirestore, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore';

import { useUser } from '../../contexts/UserContext';

interface DeleteCourseProps {
  selectedCourse: string;
  onCourseDelete: () => void; // Callback to refresh data
}

const DeleteCourse: React.FC<DeleteCourseProps> = ({ selectedCourse, onCourseDelete }) => {
  const [open, setOpen] = useState(false);

  const db = getFirestore();
  const { userDetails, refreshUserDetails } = useUser(); // Fix: Include userDetails

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    if (!selectedCourse || !userDetails?.uid) return; // Ensure userDetails and UID are available
  
    try {
      const courseRef = doc(db, 'courses', selectedCourse);
  
      // Delete the course document
      await deleteDoc(courseRef);
  
      // Update the user's classes field
      const userRef = doc(db, 'users', userDetails.uid);
      const userSnapshot = await getDoc(userRef);
  
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        if (userData.classes && userData.classes[selectedCourse]) {
          const updatedClasses = { ...userData.classes };
          delete updatedClasses[selectedCourse];
  
          await updateDoc(userRef, { classes: updatedClasses });
        }
      }

      await refreshUserDetails(); // Refresh userDetails in context
      onCourseDelete(); // Refresh parent data
      handleClose();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Delete Course
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this course? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeleteCourse;