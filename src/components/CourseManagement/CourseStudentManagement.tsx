// src/components/CourseStudentManagement.tsx

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

interface CourseStudentManagementProps {
  selectedCourse: string;
  onStudentChange: () => void; // Callback to refresh the student list
}

const CourseStudentManagement: React.FC<CourseStudentManagementProps> = ({ selectedCourse, onStudentChange }) => {
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [action, setAction] = useState('add');

  const db = getFirestore();

  const handleStudentUpdate = async () => {
    if (!studentId || !selectedCourse) {
      setMessage('Please enter a Student ID and select a course.');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);
    try {
      const userRef = doc(db, 'users', studentId);

      if (action === 'add') {
        await updateDoc(userRef, { class: arrayUnion(selectedCourse) });
        setMessage(`Student ${studentId} added to course ${selectedCourse}.`);
      } else {
        await updateDoc(userRef, { class: arrayRemove(selectedCourse) });
        setMessage(`Student ${studentId} removed from course ${selectedCourse}.`);
      }

      onStudentChange(); // Refresh the student list
    } catch (error) {
      console.error('Error updating student course:', error);
      setMessage('Error updating student course.');
    }
    setLoading(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" component="h2">
        Manage Students in {selectedCourse}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <TextField
          label="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          fullWidth
          required
          margin="normal"
          sx={{ mr: 2 }}
        />
        <FormControl sx={{ minWidth: 120, mr: 2 }}>
          <InputLabel>Action</InputLabel>
          <Select
            value={action}
            onChange={(e) => setAction(e.target.value)}
          >
            <MenuItem value="add">Add</MenuItem>
            <MenuItem value="remove">Remove</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleStudentUpdate}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Update'}
        </Button>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="info">
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CourseStudentManagement;