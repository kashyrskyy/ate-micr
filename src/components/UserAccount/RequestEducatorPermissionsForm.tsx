// src/components/UserAccount/RequestEducatorPermissionsForm.tsx
import React, { useState } from 'react';
import { Box, Typography, Grid, OutlinedInput, FormLabel, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CircularProgress } from '@mui/material';
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
    <Box className="request-form-container" sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="text" onClick={handleNavigateBack} className="back-home-button">
          &larr; My Account
        </Button>
      </Box>

      <Box 
        className="request-form-outline"
      >
        <Typography variant="h5" component="h1" className="request-form-title">
          Request Educator Permissions
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormLabel htmlFor="first-name" required>First Name</FormLabel>
            <OutlinedInput
              id="first-name"
              name="first-name"
              value={firstName}
              onChange={handleInputChange(setFirstName)}
              placeholder="John"
              fullWidth
              required
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormLabel htmlFor="last-name" required>Last Name</FormLabel>
            <OutlinedInput
              id="last-name"
              name="last-name"
              value={lastName}
              onChange={handleInputChange(setLastName)}
              placeholder="Doe"
              fullWidth
              required
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel htmlFor="institution" required>Institution Affiliation</FormLabel>
            <OutlinedInput
              id="institution"
              name="institution"
              value={institution}
              onChange={handleInputChange(setInstitution)}
              placeholder="University Name"
              fullWidth
              required
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel htmlFor="email" required>Institutional Email</FormLabel>
            <OutlinedInput
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange(setEmail)}
              placeholder="name@institution.edu"
              fullWidth
              required
              disabled={loading}
            />
            <Typography variant="caption" sx={{ mt: 1 }}>Please use your institutional email to confirm your affiliation.</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormLabel htmlFor="course-number" required>Course Number</FormLabel>
            <OutlinedInput
              id="course-number"
              name="course-number"
              value={courseNumber}
              onChange={handleInputChange(setCourseNumber)}
              placeholder="e.g., BIOL301"
              fullWidth
              required
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormLabel htmlFor="course-title" required>Course Title</FormLabel>
            <OutlinedInput
              id="course-title"
              name="course-title"
              value={courseTitle}
              onChange={handleInputChange(setCourseTitle)}
              placeholder="e.g., Biotech Research Methods"
              fullWidth
              required
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel htmlFor="course-description" required>Course Description</FormLabel>
            <OutlinedInput
              id="course-description"
              name="course-description"
              value={courseDescription}
              onChange={handleInputChange(setCourseDescription)}
              placeholder="e.g., A comprehensive course covering advanced methods and tools in modern biotech labs, focusing on CRISPR, NGS, and bioinformatics."
              fullWidth
              multiline
              rows={2}
              required
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleRequestPermissions} 
              fullWidth
              className="submit-button"
              sx={{ 
                mt: 3, 
                py: 1.5, 
                fontWeight: 'bold', 
                fontSize: '16px', 
                textTransform: 'uppercase' 
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit Request'}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
              For any questions, please contact <a href="mailto:andriy@intofuture.org">andriy@intofuture.org</a>.
            </Typography>
          </Grid>
        </Grid>

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