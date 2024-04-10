// Login/index.jsx
import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Button, Typography, Container, Box, Snackbar, Alert, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const auth = getAuth();

  console.log("Login loaded")

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const [passcode, setPasscode] = useState('');
  const [isPasscodeValid, setIsPasscodeValid] = useState(false);

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
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setSnackbarMessage('Successfully logged in with Google!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      setSnackbarMessage(`Login Failed: ${error.message}`);
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
            <TextField fullWidth label="Passcode" variant="outlined" value={passcode} onChange={(e) => setPasscode(e.target.value)} sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button type="submit" variant="contained" sx={{ mt: 2, textTransform: 'none' }}>
                Continue
              </Button>
            </Box>
          </form>
        )}
        {isPasscodeValid && (
          <>
            <Typography variant="h6" component="h2" gutterBottom>
              [Test] Welcome! Please sign in to get started.
            </Typography>
            <Button variant="contained" startIcon={<GoogleIcon />} onClick={handleGoogleSignIn} sx={{ textTransform: 'none', fontSize: '1rem', backgroundColor: '#4285F4', '&:hover': { backgroundColor: '#357ae8' } }}>
              Sign In with Google
            </Button>
          </>
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
