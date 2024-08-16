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

      <AddCourseForm onCourseAdded={handleCourseAdded} />

      {/* Advanced Section */}
      <Box sx={{ mt: 4 }}>
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
              >
                {userDetails?.isAdmin ? (
                  <Typography>
                    <span style={{ color: 'green' }}>✔ Educator Account Approved</span>
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