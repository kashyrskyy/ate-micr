// src/components/UserAccount/MyProfile.tsx
import React, { useState } from 'react';
import { Box, Typography, Button, Switch, FormControlLabel, Snackbar, Alert } from '@mui/material';
import { UserDetails, useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import AddCourseForm from './AddCourseForm';
import RetrieveCoursePasscode from './RetrieveCoursePasscode';

const MyProfile: React.FC = () => {
  const { userDetails, setUserDetails } = useUser();
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info'>('success');

  const navigate = useNavigate();
  const db = getFirestore();

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateToRequestPermissions = () => {
    // If the user is an admin, make the button unclickable
    if (!userDetails?.isAdmin) {
      navigate('/request-educator-permissions');
    }
  };

  const handleNavigateToRequestNewCourse = () => {
    navigate('/request-new-course');
  };

  const handleCourseAdded = (message: string, severity: 'success' | 'error' | 'info') => {
    // Action 1: Show a confirmation message or modal (using Snackbar component)
    setOpenSnackbar(true);
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);

    // Action 2: Refresh the list of courses (assuming you have a function to fetch user details)
    if (severity === 'success' && userDetails) {
      const fetchUpdatedUserDetails = async () => {
        const userDoc = doc(db, 'users', userDetails.uid);
        const updatedUserDoc = await getDoc(userDoc);
        if (updatedUserDoc.exists()) {
          const updatedUserData = updatedUserDoc.data() as UserDetails;
          setUserDetails({ ...updatedUserData, uid: userDetails.uid });
        }
      };

      fetchUpdatedUserDetails();
    }
  };

  const handleToggleEnroll = () => {
    setIsEnrollOpen(!isEnrollOpen);
  };

  const handleToggleAdvanced = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  const getAccountStatus = () => {
    if (userDetails?.isSuperAdmin) return 'Super Admin';
    if (userDetails?.isAdmin) return 'Educator';
    return 'Student';
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box className="profile-container">
      <Button variant="text" onClick={handleNavigateHome} className="profile-button">
        &larr; Home Page
      </Button>
      <Typography className="webpage_title">
        My Account
      </Typography>
      {userDetails && (
        <>
          <Typography className="profile-text">
            User ID: {userDetails.uid}
          </Typography>
          <Typography className="profile-text">
            Account Status: {getAccountStatus()}
          </Typography>
          <Typography className="profile-text">
            Current Courses: {userDetails.class ? userDetails.class.join(', ') : 'None'}
          </Typography>
        </>
      )}

      {/* Enroll in a Course Section - Hidden for educators */}
      {!userDetails?.isAdmin && (
        <Box className="profile-switch-container">
          <FormControlLabel
            control={<Switch checked={isEnrollOpen} onChange={handleToggleEnroll} />}
            label="Enroll in a Course"
          />
          {isEnrollOpen && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" className="profile-text">
                Use the area below to add a course access to your account.
              </Typography>
              <AddCourseForm onCourseAdded={handleCourseAdded} />
            </Box>
          )}
        </Box>
      )}

      {/* Advanced Section */}
      <Box className="profile-advanced-section">
        <FormControlLabel
          control={<Switch checked={isAdvancedOpen} onChange={handleToggleAdvanced} />}
          label="Advanced"
        />
        {isAdvancedOpen && (
          <>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="text"
                onClick={handleNavigateToRequestPermissions}
                disabled={userDetails?.isAdmin}
                className="profile-button"
              >
                {userDetails?.isAdmin ? (
                  <Typography>
                    <span className="success-text">✔ Educator Account Approved</span>
                  </Typography>
                ) : (
                  'Request Educator Permissions'
                )}
              </Button>
            </Box>
            {userDetails?.isAdmin && (
              <>
                <Box sx={{ mt: 2 }}>
                  <Button variant="text" onClick={handleNavigateToRequestNewCourse}>
                    Request Creating a New Course
                  </Button>
                </Box>
                <RetrieveCoursePasscode />
              </>
            )}
          </>
        )}
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MyProfile;