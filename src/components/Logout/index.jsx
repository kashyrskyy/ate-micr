// Logout/index.jsx
import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Logout = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  console.log("Logout loaded")

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleDisagree = () => {
    setOpenDialog(false);
  };
  
  const handleAgree = () => {
    const auth = getAuth();
    
    signOut(auth).then(() => {
      setOpenDialog(false);
      setOpenSnackbar(true);
      setSnackbarMessage('Logged out successfully');
    }).catch((error) => {
      setOpenDialog(false);
      setOpenSnackbar(true);
      setSnackbarMessage('Logout failed: ' + error.message);
    });
  };

  return (
    <>
      <Button 
        variant="outlined" 
        onClick={handleClickOpen}
        sx={{ 
          fontSize: '1rem',
          mt: 2, 
          textTransform: 'none',
          minWidth: '100px', // Adjust the width as needed to fit your design
          color: 'currentColor', // Ensures the font color stays the same
          borderColor: 'rgba(255, 0, 0, 0.5)', // Lighter red border for the default state
          boxShadow: 'none', // No box-shadow initially
          '&:hover': {
            borderColor: 'rgba(255, 0, 0, 0.7)', // Slightly darker red border on hover
            backgroundColor: 'rgba(255, 0, 0, 0.1)', // Light red background on hover
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
            color: 'currentColor', // Ensure the text color remains the same
            transform: 'scale(1.05)', // Transform effect on hover
          },
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out',
        }}
      >
        Logout
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Logging Out"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAgree} autoFocus>
            Yes
          </Button>
          <Button onClick={handleDisagree}>No</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Logout;
