import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Button, Typography, Container, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const auth = getAuth();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      Swal.fire({
        icon: 'success',
        title: 'Successfully logged in with Google!',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
        showConfirmButton: true,
      });
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
    </Container>
  );
};

export default Login;