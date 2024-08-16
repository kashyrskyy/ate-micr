// src/components/UserAccount/RequestNewCourseForm.tsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const RequestNewCourseForm: React.FC = () => {
  const { userDetails } = useUser();

  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const db = getFirestore();
  const navigate = useNavigate();

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const handleRequestNewCourse = async () => {
    if (!courseName || !courseDescription) {
      setSnackbarMessage('Please fill in all required fields.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    try {
      const requestDoc = {
        uid: userDetails?.uid,
        courseName,
        courseDescription,
        additionalInfo,
        status: 'pending',
        timestamp: new Date(),
      };
      await addDoc(collection(db, 'courseRequests'), requestDoc);
      setSnackbarMessage('Your course request has been submitted for review.');
      setSnackbarSeverity('success');
      setCourseName('');
      setCourseDescription('');
      setAdditionalInfo('');
    } catch (error) {
      console.error('Error submitting course request: ', error);
      setSnackbarMessage('Error submitting your course request. Please try again.');
      setSnackbarSeverity('error');
    }
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleNavigateBack = () => {
    navigate('/my-profile');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="text" onClick={handleNavigateBack} sx={{ mr: 2 }}>
          &larr; My Account
        </Button>
      </Box>

      <Box 
        sx={{ 
          mt: 2, 
          mx: 'auto', 
          maxWidth: 600, 
          p: 3, 
          backgroundColor: '#f9f9f9', 
          borderRadius: 2, 
          boxShadow: 1 
        }}
      >
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
          Request Creating a New Course
        </Typography>
        <TextField
          label="Course Name"
          value={courseName}
          onChange={handleInputChange(setCourseName)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Course Description"
          value={courseDescription}
          onChange={handleInputChange(setCourseDescription)}
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Additional Information"
          value={additionalInfo}
          onChange={handleInputChange(setAdditionalInfo)}
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          sx={{ mb: 3 }}
          helperText="Provide any additional information (optional)."
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleRequestNewCourse} 
          sx={{ 
            display: 'block', 
            mx: 'auto', 
            mb: 2, 
            py: 1.5, 
            px: 4, 
            fontWeight: 'bold', 
            fontSize: '16px', 
            textTransform: 'uppercase' 
          }}
        >
          Submit Request
        </Button>

        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default RequestNewCourseForm;