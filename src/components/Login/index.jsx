// Login/index.jsx
import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';
import { Button, Typography, Container, Box, Snackbar, Alert, TextField, Checkbox, FormControlLabel, Tooltip } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const auth = getAuth();

  console.log("Login loaded")

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const [passcode, setPasscode] = useState('');
  const [isPasscodeValid, setIsPasscodeValid] = useState(false);

  const [keepSignedIn, setKeepSignedIn] = useState(true);

  const VALID_PASSCODE = import.meta.env.VITE_VALID_PASSCODE;

  const validatePasscode = (input) => {
    if (input === VALID_PASSCODE) {
      setIsPasscodeValid(true);
      setSnackbarMessage("Passcode Entered Correctly.");
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } else {
      setSnackbarMessage("Invalid passcode. Please try again.");
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Set persistence based on the checkbox state
      await setPersistence(auth, keepSignedIn ? browserLocalPersistence : browserSessionPersistence);
      
      // Proceed with Google sign-in
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);
      setSnackbarMessage('Successfully logged in with Google!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      let errorMessage = 'Login Failed: An unexpected error occurred.';
      switch (error.code) {
        case 'auth/network-request-failed':
          errorMessage = 'Login Failed: Network error, please check your connection.';
          break;
        case 'auth/popup-closed-by-user':
          errorMessage = 'Login Failed: The sign-in popup was closed before completion.';
          break;
        case 'auth/cancelled-popup-request':
          errorMessage = 'Login Failed: Another sign-in request was made before the first one was completed.';
          break;
        case 'auth/popup-blocked':
          errorMessage = 'Login Failed: The sign-in popup was blocked by the browser. Please allow popups for this site.';
          break;
      }
      setSnackbarMessage(errorMessage);
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Box sx={{ textAlign: 'center', mb: 2 }}> {/* Adjust the bottom margin as needed */}
        <img src={`${import.meta.env.VITE_DEPLOY_ENV === 'github' ? '/ate-micr/' : '/'}ate-logo.png`} alt="ATE Logo" style={{ width: 150, marginBottom: 20 }}/>
        <Typography variant="h4" component="h1" gutterBottom>
          ATE 2.0: MICR 230
        </Typography>
        {!isPasscodeValid && (
          <form onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission
            validatePasscode(passcode);
          }}>
            <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
              Enter Passcode
            </Typography>
            <TextField 
              fullWidth 
              label="Passcode" 
              variant="outlined" 
              value={passcode} 
              onChange={(e) => setPasscode(e.target.value)} 
              sx={{ 
                mb: 2, 
                // Define a fixed height if necessary
                height: 56, // The standard height for Material-UI TextFields, but you can adjust as needed
                '& .MuiOutlinedInput-root': {
                  // Apply styles for the input element to maintain its size on focus
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.23)', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.5)', // Darken border slightly on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3f51b5', // Change border color to your theme's primary color on focus
                    borderWidth: '1px', // Keep border width consistent on focus
                  },
                },
                // Add any additional styles for transitions if you like
                transition: 'border-color 0.3s ease',
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button 
                type="submit" 
                variant="contained" 
                sx={{ 
                  mt: 2, 
                  textTransform: 'none',
                  // Define a minimum width or width if necessary
                  minWidth: '250px', // Adjust the width as needed to fit your design
                  // Apply a box-shadow for hover effect instead of changing border or size
                  boxShadow: 'none', // No box-shadow initially
                  '&:hover': {
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
                    // Use transform for visual feedback without layout shift
                    transform: 'scale(1.05)',
                  },
                  // Transition for the transform property for smooth effect
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  // Prevent layout shift by applying a transparent border
                  border: '1px solid transparent',
                }}
              >
                Continue
              </Button>
            </Box>
          </form>
        )}
        {isPasscodeValid && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Welcome! Please sign in to get started.
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<GoogleIcon />} 
              onClick={handleGoogleSignIn} 
              sx={{ 
                textTransform: 'none', 
                fontSize: '1rem', 
                backgroundColor: '#4285F4', 
                '&:hover': { 
                  backgroundColor: '#357ae8', 
                  // Apply a box-shadow instead of changing the border or size
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', 
                },
                // Prevent layout shift by applying a transparent border
                border: '1px solid transparent',
                // Use transform for visual feedback without layout shift
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                // Fix the width or min-width as necessary
                minWidth: '250px', // Adjust as needed
              }}
            >
              Sign In with Google
            </Button>
            {/* The Checkbox is rendered conditionally below the Google Sign In button */}
            <Tooltip title="Keep you signed in on this device. Do not use on public or shared computers." placement="right">
              <FormControlLabel
                control={<Checkbox checked={keepSignedIn} onChange={(e) => setKeepSignedIn(e.target.checked)} />}
                label="Keep me signed in"
              />
            </Tooltip>
          </Box>
        )}
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;