// src/components/UserAccount/RequestEducatorPermissionsForm.tsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext'; // Import your UserContext
import { useNavigate } from 'react-router-dom';

const RequestEducatorPermissionsForm: React.FC = () => {
  const { userDetails } = useUser(); // Get the user details, including the user ID

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [institution, setInstitution] = useState('');
  const [email, setEmail] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogContent, setDialogContent] = useState('');

  const db = getFirestore();
  const navigate = useNavigate();

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const handleRequestPermissions = async () => {
    if (!firstName || !lastName || !institution || !email || !courseNumber || !courseTitle || !courseDescription) {
      setDialogTitle('Error');
      setDialogContent('Please fill in all required fields.');
      setDialogOpen(true);
      return;
    }

    setLoading(true);

    try {
      const requestDoc = {
        uid: userDetails?.uid, // Include the user ID in the request document
        firstName,
        lastName,
        institution,
        email,
        courseNumber,
        courseTitle,
        courseDescription,
        status: 'pending',
        timestamp: new Date(),
      };
      await addDoc(collection(db, 'educatorRequests'), requestDoc);

      setDialogTitle('Success');
      setDialogContent('Your request has been submitted for review.');

      // Clear form fields
      setFirstName('');
      setLastName('');
      setInstitution('');
      setEmail('');
      setCourseNumber('');
      setCourseTitle('');
      setCourseDescription('');

      // Show success message and then navigate back to My Account
      setDialogOpen(true);
      setTimeout(() => {
        navigate('/my-profile');
      }, 2000);

    } catch (error) {
      console.error('Error submitting request: ', error);
      setDialogTitle('Error');
      setDialogContent('Error submitting your request. Please try again.');
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
          disabled={loading}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={handleInputChange(setLastName)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          required
          disabled={loading}
        />
        <TextField
          label="Institution Affiliation"
          value={institution}
          onChange={handleInputChange(setInstitution)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          required
          disabled={loading}
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
          disabled={loading}
        />
        <TextField
          label="Course Number"
          value={courseNumber}
          onChange={handleInputChange(setCourseNumber)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          helperText="Enter the course number (e.g., BIOL301)."
          required
          disabled={loading}
        />
        <TextField
          label="Course Title"
          value={courseTitle}
          onChange={handleInputChange(setCourseTitle)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          helperText="Enter the course title (e.g., Advanced Techniques in Biotechnology)."
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
          helperText="Provide a brief description of the course (e.g., A comprehensive course covering advanced methods and tools in modern biotech labs, focusing on CRISPR, NGS, and bioinformatics.)"
          required
          disabled={loading}
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
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit Request'}
        </Button>
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
          For any questions, please contact <a href="mailto:andriy@intofuture.org">andriy@intofuture.org</a>.
        </Typography>

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

export default RequestEducatorPermissionsForm;