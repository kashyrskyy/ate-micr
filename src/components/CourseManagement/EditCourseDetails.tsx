// src/components/CourseManagement/EditCourseDetails.tsx

import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';

import { useUser } from '../../contexts/UserContext';

interface EditCourseDetailsProps {
  selectedCourse: string;
  selectedCourseDetails: { number: string; title: string } | null;
  onCourseUpdate: () => void; // Callback to refresh data
}

const EditCourseDetails: React.FC<EditCourseDetailsProps> = ({ selectedCourse, selectedCourseDetails, onCourseUpdate }) => {
  const [open, setOpen] = useState(false);
  const [courseNumber, setCourseNumber] = useState('');
  const [courseTitle, setCourseTitle] = useState('');

  const db = getFirestore();

  const { userDetails, refreshUserDetails } = useUser(); // Fix: Include userDetails
  
  // Open the dialog and populate the fields with the current course details
  const handleOpen = () => {
    if (selectedCourseDetails) {
      setCourseNumber(selectedCourseDetails.number || '');
      setCourseTitle(selectedCourseDetails.title || '');
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCourseNumber(''); // Clear the state when dialog is closed
    setCourseTitle('');
  };

  const handleSave = async () => {
    if (!selectedCourse || !userDetails?.uid) {
        console.error('Selected course or user details are missing.'); // Ensure userDetails and UID are available
        return;
    }
  
    try {
      const courseRef = doc(db, 'courses', selectedCourse);
  
      // Update the course document
      await updateDoc(courseRef, {
        number: courseNumber,
        title: courseTitle,
      });
  
      // Update the user's classes field
      const userRef = doc(db, 'users', userDetails.uid);
      const userSnapshot = await getDoc(userRef);
  
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        if (userData.classes && userData.classes[selectedCourse]) {
          const updatedClasses = {
            ...userData.classes,
            [selectedCourse]: {
              number: courseNumber,
              title: courseTitle,
            },
          };
  
          await updateDoc(userRef, { classes: updatedClasses });
        }
      }
      
      await refreshUserDetails(); // Refresh userDetails in context
      onCourseUpdate(); // Refresh parent data
      handleClose();
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Edit Course Details
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Course Details</DialogTitle>
        <DialogContent>
          <TextField
            label="Course Number"
            value={courseNumber}
            onChange={(e) => setCourseNumber(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Course Title"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary" disabled={!courseNumber || !courseTitle} >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditCourseDetails;