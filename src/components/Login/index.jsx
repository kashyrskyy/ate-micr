import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Button, Typography, Container, Box, Snackbar, Alert } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const auth = getAuth();

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

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
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img src="/ate-micr/ate-logo.png" alt="ATE Logo" style={{ width: 150, marginBottom: 20 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          ATE 2.0: MICR 230
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Welcome! Please sign in to get started.
        </Typography>
      </Box>
      <Button variant="contained" startIcon={<GoogleIcon />} onClick={handleGoogleSignIn} sx={{ textTransform: 'none', fontSize: '1rem', backgroundColor: '#4285F4', '&:hover': { backgroundColor: '#357ae8' } }}>
        Sign In with Google
      </Button>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
