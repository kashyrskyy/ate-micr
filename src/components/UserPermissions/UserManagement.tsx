import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';

const UserManagement: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [lastLogin, setLastLogin] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newStatus, setNewStatus] = useState(false);
  const db = getFirestore();

  const fetchUserDetails = async () => {
    setLoading(true);
    setUserExists(false);
    try {
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        setIsAdmin(userData.isAdmin);
        if (userData.lastLogin && userData.lastLogin.toDate) {
          setLastLogin(userData.lastLogin.toDate().toLocaleString());
        } else {
          setLastLogin('No data available');
        }
        setUserExists(true);
      } else {
        setMessage('User not found.');
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setMessage('Error fetching user.');
      setOpenSnackbar(true);
    }
    setLoading(false);
  };

  const handleConfirm = async () => {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { isAdmin: newStatus });
      setMessage(`User ${newStatus ? 'granted' : 'revoked'} admin privileges successfully.`);
      setIsAdmin(newStatus);  // Update the local state immediately
    } catch (error) {
      console.error('Error updating user:', error);
      setMessage('Error updating user.');
    }
    setOpenSnackbar(true);
    setOpenDialog(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (userExists) {
      setNewStatus(!isAdmin);
      setOpenDialog(true);
    } else {
      setMessage('User not found.');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Management
      </Typography>
      <Typography variant="body1" gutterBottom>
        Use this page to view and manage user permissions. Enter the User ID to grant or revoke admin privileges.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            fullWidth
            required
            margin="normal"
            onBlur={fetchUserDetails}
            sx={{ minWidth: '300px' }}  // Set a minimum width for the input box
          />
          {loading ? (
            <CircularProgress />
          ) : (
            userExists && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" component="h2">
                  Current Status: {isAdmin ? 'Educator (Admin)' : 'Student (Non-Admin)'}
                </Typography>
                <Typography variant="h6" component="h2">
                  Last Login: {lastLogin}
                </Typography>
                <Button type="submit" variant="contained" color={isAdmin ? 'secondary' : 'primary'}>
                  {isAdmin ? 'Revoke Admin' : 'Make Admin'}
                </Button>
              </Box>
            )
          )}
        </form>
      </Box>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{isAdmin ? 'Revoke Admin Privileges' : 'Grant Admin Privileges'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to {isAdmin ? 'revoke' : 'grant'} admin privileges for this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="info">
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UserManagement;