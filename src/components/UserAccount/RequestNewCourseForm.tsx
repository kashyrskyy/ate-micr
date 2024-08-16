// src/components/UserAccount/RequestNewCourseForm.tsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const RequestNewCourseForm: React.FC = () => {
  const { userDetails } = useUser();

  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogContent, setDialogContent] = useState('');
  const db = getFirestore();
  const navigate = useNavigate();

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const handleRequestNewCourse = async () => {
    if (!courseName || !courseDescription) {
      setDialogTitle('Error');
      setDialogContent('Please fill in all required fields.');
      setDialogOpen(true);
      return;
    }

    setLoading(true);

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
      
      setDialogTitle('Success');
      setDialogContent('Your course request has been submitted for review.');

      // Clear form fields
      setCourseName('');
      setCourseDescription('');
      setAdditionalInfo('');

      // Show success message and then navigate back to My Account
      setDialogOpen(true);
      setTimeout(() => {
        navigate('/my-profile');
      }, 2000);

    } catch (error) {
      console.error('Error submitting course request: ', error);
      setDialogTitle('Error');
      setDialogContent('Error submitting your course request. Please try again.');
      setDialogOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
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
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleRequestNewCourse} 
            sx={{ 
              py: 1.5, 
              px: 4, 
              fontWeight: 'bold', 
              fontSize: '16px', 
              textTransform: 'uppercase' 
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit Request'}
          </Button>
        </Box>

        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircleIcon sx={{ color: 'green', fontSize: 50, marginRight: 1 }} />
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ textAlign: 'center' }}>
              {dialogContent}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default RequestNewCourseForm;