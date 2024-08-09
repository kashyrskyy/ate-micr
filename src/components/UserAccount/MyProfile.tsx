// src/components/UserAccount/MyProfile.tsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Snackbar, Alert, Grid } from '@mui/material';
import { useUser, UserDetails } from '../../contexts/UserContext';
import { getFirestore, doc, updateDoc, collection, getDocs, arrayUnion, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const MyProfile: React.FC = () => {
  const { userDetails, setUserDetails } = useUser();
  const [course, setCourse] = useState('');
  const [passcode, setPasscode] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info'>('success');
  const [courses, setCourses] = useState<{ name: string, passcode: string }[]>([]);
  const db = getFirestore();

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      // Use let instead of const
      let coursesList = querySnapshot.docs.map(doc => doc.data() as { name: string, passcode: string });
  
      // Filter out "Public-Source" course for non-admin users
      if (!userDetails?.isAdmin) {
        coursesList = coursesList.filter(course => course.name !== 'Public-Source');
      }
  
      setCourses(coursesList);
    };
  
    fetchCourses();
  }, [db, userDetails]); // Added userDetails as a dependency

  const handleCourseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse(event.target.value);
  };

  const handlePasscodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasscode(event.target.value);
  };

  const handleAddCourse = async () => {
    const selectedCourse = courses.find(c => c.name === course);
    if (selectedCourse && selectedCourse.passcode === passcode) {
      try {
        if (userDetails) {
          const userCourses = userDetails.class || [];
          if (userCourses.includes(course)) {
            setSnackbarMessage(`Course access for ${course} already added to your account!`);
            setSnackbarSeverity('info');
          } else {
            const userDoc = doc(db, 'users', userDetails.uid);
            await updateDoc(userDoc, {
              class: arrayUnion(course),
            });
            // Fetch updated user details
            const updatedUserDoc = await getDoc(userDoc);
            if (updatedUserDoc.exists()) {
              const updatedUserData = updatedUserDoc.data() as UserDetails;
              setUserDetails({ ...updatedUserData, uid: userDetails.uid });
            }
            setSnackbarMessage(`Course access for ${course} added to your account successfully!`);
            setSnackbarSeverity('success');
          }
        }
      } catch (error) {
        console.error('Error updating document: ', error);
        setSnackbarMessage('Error adding course access to your account.');
        setSnackbarSeverity('error');
      }
    } else {
      setSnackbarMessage('Invalid passcode. Course not added.');
      setSnackbarSeverity('error');
    }
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const getAccountStatus = () => {
    if (userDetails?.isSuperAdmin) return 'Super Admin';
    if (userDetails?.isAdmin) return 'Educator';
    return 'Student';
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="text" onClick={handleNavigateHome} sx={{ mr: 2 }}>
          &larr; Home Page
        </Button>
      </Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
        My Account
      </Typography>
      {userDetails && (
        <>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            User ID: {userDetails.uid}
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Account Status: {getAccountStatus()}
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Current Courses: {userDetails.class ? userDetails.class.join(', ') : 'None'}
          </Typography>
        </>
      )}
      <Typography variant="body1" sx={{ mb: 2 }}>
        Use the area below to add a course access to your account.
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: '50%' }}>
        <Grid item xs={5}>
          <TextField
            select
            label="Select Course"
            value={course}
            onChange={handleCourseChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            {courses.map((course) => (
              <MenuItem key={course.name} value={course.name}>{course.name}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Enter Passcode"
            value={passcode}
            onChange={handlePasscodeChange}
            fullWidth
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="contained" onClick={handleAddCourse}>
            Add Course
          </Button>
        </Grid>
      </Grid>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MyProfile;