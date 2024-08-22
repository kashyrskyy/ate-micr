// src/components/UserAccount/RetrieveCoursePasscode.tsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Snackbar, Alert, Grid } from '@mui/material';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';

const RetrieveCoursePasscode: React.FC = () => {
  const { userDetails } = useUser();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courses, setCourses] = useState<{ number: string, passcode: string }[]>([]);
  const [passcode, setPasscode] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const db = getFirestore();

  useEffect(() => {
    const fetchCourses = async () => {
      if (userDetails?.isAdmin) {
        const q = query(collection(db, 'courses'), where('courseAdmin', '==', userDetails.uid));
        const querySnapshot = await getDocs(q);
        const fetchedCourses = querySnapshot.docs.map(doc => doc.data() as { number: string, passcode: string });
        setCourses(fetchedCourses);
      }
    };

    fetchCourses();
  }, [db, userDetails]);

  const handleCourseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const courseNumber = event.target.value;
    setSelectedCourse(courseNumber);
    const course = courses.find(c => c.number === courseNumber);
    if (course) {
      setPasscode(course.passcode);
      setSnackbarMessage(`Passcode for course number ${courseNumber} retrieved successfully.`);
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } else {
      setPasscode(null);
      setSnackbarMessage('Course not found.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="subtitle1" component="h2" sx={{ mb: 2 }}>
        Retrieve Course Passcode
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: '25%' }}>
        <Grid item xs={12}>
          <TextField
            select
            label="Select Course Number"
            value={selectedCourse}
            onChange={handleCourseChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            {courses.map((course) => (
              <MenuItem key={course.number} value={course.number}>{course.number}</MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      {passcode && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          Passcode: <strong>{passcode}</strong>
        </Typography>
      )}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RetrieveCoursePasscode;