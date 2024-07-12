import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Chip, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { getFirestore, doc, updateDoc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  isAdmin: boolean;
  isSuperAdmin?: boolean;
  lastLogin?: {
    toDate: () => Date;
  };
  class?: string; // Add the optional class field
}

const AssignCourse: React.FC<{ userId: string; userClass?: string }> = ({ userId, userClass }) => {
  const [selectedCourse, setSelectedCourse] = useState(userClass || '');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const db = getFirestore();

  const handleAssignCourse = async () => {
    if (!userId || !selectedCourse) {
      setMessage('Please enter a User ID and select a course.');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { class: selectedCourse });
      setMessage(`Course ${selectedCourse} assigned successfully to user ${userId}.`);
    } catch (error) {
      console.error('Error assigning course:', error);
      setMessage('Error assigning course.');
    }
    setLoading(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <Typography variant="h6" component="h2" sx={{ mr: 2 }}>
          Current Course:
        </Typography>
        <FormControl sx={{ minWidth: 200, mr: 2 }}>
          <InputLabel>Course</InputLabel>
          <Select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <MenuItem value="MICRO230">MICRO230</MenuItem>
            <MenuItem value="MICRO240">MICRO240</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAssignCourse}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Assign Course'}
        </Button>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="info">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

const UserManagement: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [userClass, setUserClass] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newStatus, setNewStatus] = useState(false);
  const [superAdmins, setSuperAdmins] = useState<User[]>([]);
  const [admins, setAdmins] = useState<User[]>([]);
  const [nonAdmins, setNonAdmins] = useState<User[]>([]);
  const db = getFirestore();

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  const fetchUserDetails = async () => {
    if (!userId) {  // Prevent the fetch operation when userId is empty
      return;
    }

    setLoading(true);
    setUserExists(false);
    try {
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data() as User;
        setIsAdmin(userData.isAdmin);
        setUserClass(userData.class);
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

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const usersCollection = collection(db, 'users');
      const usersSnapshot = await getDocs(usersCollection);
      const superAdminsList: User[] = [];
      const adminsList: User[] = [];
      const nonAdminsList: User[] = [];

      usersSnapshot.forEach(doc => {
        const userData = { id: doc.id, ...doc.data() } as User;
        if (userData.isSuperAdmin) {
          superAdminsList.push(userData);
        } else if (userData.isAdmin) {
          adminsList.push(userData);
        } else {
          nonAdminsList.push(userData);
        }
      });

      setSuperAdmins(superAdminsList);
      setAdmins(adminsList);
      setNonAdmins(nonAdminsList);
    } catch (error) {
      console.error('Error fetching users:', error);
      setMessage('Error fetching users.');
      setOpenSnackbar(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

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

  const renderUsersGrid = (users: User[]) => (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={3} key={user.id}>
            <Paper elevation={2} sx={{ padding: 2 }}>
              {user.isSuperAdmin && (
                <Chip 
                  label="Super Admin" 
                  variant="outlined" 
                  sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#ffcdd2', color: '#c62828', mb: 1 }} 
                />
              )}
              {user.isAdmin && !user.isSuperAdmin && (
                <Chip 
                  label="Educator (Admin)" 
                  variant="outlined" 
                  sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#ffecb3', color: '#e65100', mb: 1 }} 
                />
              )}
              {!user.isAdmin && (
                <Chip 
                  label="Student (Regular)" 
                  variant="outlined" 
                  sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#bbdefb', color: '#1e88e5', mb: 1 }} 
                />
              )}
              <Typography variant="body1">
                ID: {user.id}
              </Typography>
              <Typography variant="body2">
                Last Login: {user.lastLogin ? user.lastLogin.toDate().toLocaleString() : 'No data available'}
              </Typography>
              {user.class && (
                <Chip 
                  label={`Course: ${user.class}`} 
                  variant="outlined" 
                  sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#c8e6c9', color: '#388e3c', mt: 1 }}
                />
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="text" onClick={handleNavigateHome} sx={{ mr: 2 }}>
          &larr; Home Page
        </Button>
      </Box>
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
              <Paper variant="outlined" sx={{ padding: 2, borderRadius: '15px', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h6" component="h2" sx={{ mr: 2 }}>
                    Current Status: {isAdmin ? 'Educator (Admin)' : 'Student (Non-Admin)'}
                  </Typography>
                  <Button type="submit" variant="contained" color={isAdmin ? 'secondary' : 'primary'} sx={{ mt: 2 }}>
                    {isAdmin ? 'Revoke Admin' : 'Make Admin'}
                  </Button>
                </Box>
                <AssignCourse userId={userId} userClass={userClass} />
              </Paper>
            )
          )}
        </form>
      </Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Current Users
      </Typography>
      {renderUsersGrid(superAdmins)}
      {renderUsersGrid(admins)}
      {renderUsersGrid(nonAdmins)}
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