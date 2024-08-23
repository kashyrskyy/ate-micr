// src/components/UserAccount/AddCourseForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { getFirestore, collection, getDocs, doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { useUser, UserDetails } from '../../contexts/UserContext';

interface AddCourseFormProps {
  onCourseAdded: (message: string, severity: 'success' | 'error' | 'info') => void; // Callback to trigger when a course is successfully added or when an error occurs
}

const AddCourseForm: React.FC<AddCourseFormProps> = ({ onCourseAdded }) => {
  const [passcode, setPasscode] = useState('');
  const { userDetails, setUserDetails } = useUser();
  const db = getFirestore();

  const handlePasscodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasscode(event.target.value);
  };

  const handleAddCourse = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      const coursesList = querySnapshot.docs.map(doc => doc.data() as { number: string, passcode: string });

      // Find course with matching passcode
      const selectedCourse = coursesList.find(c => c.passcode === passcode);
      if (selectedCourse) {
        if (userDetails) {
          const userCourses = userDetails.class || [];
          if (userCourses.includes(selectedCourse.number)) {
            // Notify user that the course is already added
            onCourseAdded(`Course access for ${selectedCourse.number} is already added to your account!`, 'info');
          } else {
            const userDoc = doc(db, 'users', userDetails.uid);
            await updateDoc(userDoc, {
              class: arrayUnion(selectedCourse.number),
            });
            // Fetch updated user details
            const updatedUserDoc = await getDoc(userDoc);
            if (updatedUserDoc.exists()) {
              const updatedUserData = updatedUserDoc.data() as UserDetails;
              setUserDetails({ ...updatedUserData, uid: userDetails.uid });
            }
            onCourseAdded(`Course access for ${selectedCourse.number} added to your account successfully!`, 'success');
            setPasscode(''); // Clear the input field on success
          }
        }
      } else {
        // Notify user of invalid passcode
        onCourseAdded('Invalid passcode. Course not found.', 'error');
      }
    } catch (error) {
      console.error('Error updating document: ', error);
      onCourseAdded('Error adding course access to your account.', 'error');
    }
  };

  return (
    <div>
      <Grid container spacing={2} sx={{ maxWidth: '50%' }}>
        <Grid item xs={10}>
          <TextField
            label="Enter Course Passcode"
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
    </div>
  );
};

export default AddCourseForm;