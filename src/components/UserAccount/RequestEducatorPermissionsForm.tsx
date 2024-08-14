// src/components/UserAccount/RequestEducatorPermissionsForm.tsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext'; // Import your UserContext
import { useNavigate } from 'react-router-dom';

const RequestEducatorPermissionsForm: React.FC = () => {
  const { userDetails } = useUser(); // Get the user details, including the user ID
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [institution, setInstitution] = useState('');
  const [email, setEmail] = useState('');
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

  const handleRequestPermissions = async () => {
    if (!firstName || !lastName || !institution || !email || !courseName || !courseDescription) {
      setSnackbarMessage('Please fill in all required fields.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    try {
      const requestDoc = {
        uid: userDetails?.uid, // Include the user ID in the request document
        firstName,
        lastName,
        institution,
        email,
        courseName,
        courseDescription,
        additionalInfo,
        status: 'pending',
        timestamp: new Date(),
      };
      await addDoc(collection(db, 'educatorRequests'), requestDoc);
      setSnackbarMessage('Your request has been submitted for review.');
      setSnackbarSeverity('success');
      setFirstName('');
      setLastName('');
      setInstitution('');
      setEmail('');
      setCourseName('');
      setCourseDescription('');
      setAdditionalInfo('');
    } catch (error) {
      console.error('Error submitting request: ', error);
      setSnackbarMessage('Error submitting your request. Please try again.');
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
          Request Educator Permissions
        </Typography>
        <TextField
          label="First Name"
          value={firstName}
          onChange={handleInputChange(setFirstName)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={handleInputChange(setLastName)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Institution Affiliation"
          value={institution}
          onChange={handleInputChange(setInstitution)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Institutional Email"
          placeholder="name@institution.edu"
          value={email}
          onChange={handleInputChange(setEmail)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          helperText="Please use your institutional email to confirm your affiliation."
          required
        />
        <TextField
          label="Course Name"
          placeholder="Course you intend to use in this app"
          value={courseName}
          onChange={handleInputChange(setCourseName)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          helperText="Specify the course you intend to use in this application."
          required
        />
        <TextField
          label="Course Description"
          placeholder="Briefly describe the course"
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
          onClick={handleRequestPermissions} 
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
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
          For any questions, please contact <a href="mailto:andriy@intofuture.org">andriy@intofuture.org</a>.
        </Typography>

        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default RequestEducatorPermissionsForm;