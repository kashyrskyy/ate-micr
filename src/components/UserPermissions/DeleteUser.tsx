// DeleteUser.tsx
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CircularProgress } from '@mui/material';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

interface DeleteUserProps {
  userId: string;
  onUserDeleted: (success: boolean) => void;  // Pass a boolean to indicate success or failure
}

const DeleteUser: React.FC<DeleteUserProps> = ({ userId, onUserDeleted }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const db = getFirestore();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      await deleteDoc(userRef);
      onUserDeleted(true); // Notify parent component about successful deletion
    } catch (error) {
      console.error('Error deleting user:', error);
      onUserDeleted(false); // Notify parent component about failed deletion
    }
    setLoading(false);
    setOpen(false);
  };

  return (
    <>
      <Button variant="text" color="error" onClick={handleClickOpen}>
        Delete User Account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this user account? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" autoFocus disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteUser;