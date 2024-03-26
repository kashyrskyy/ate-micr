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
      <Button variant="outlined" onClick={handleClickOpen}>
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
