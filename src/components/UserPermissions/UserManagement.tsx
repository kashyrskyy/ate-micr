import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { getFirestore, doc, updateDoc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import UserTable from './UserTable'; // Import the UserTable component
import DeleteUser from './DeleteUser'; // Import the DeleteUser component

interface User {
  id: string;
  isAdmin: boolean;
  isSuperAdmin?: boolean;
  lastLogin?: {
    toDate: () => Date;
  };
  classes?: Record<string, { number: string; title: string }>; // Updated to reflect the new structure
}

interface Course {
  id: string;
  number: string;
  title: string;
}

const AssignCourse: React.FC<{ userId: string; userClasses?: Record<string, { number: string; title: string }>; courses: Course[] }> = ({ userId, userClasses, courses }) => {
  const [selectedCourse, setSelectedCourse] = useState('');
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
      const courseData = courses.find(course => course.id === selectedCourse);
      if (courseData) {
        await updateDoc(userRef, { [`classes.${selectedCourse}`]: { number: courseData.number, title: courseData.title } });
        setMessage(`Course ${courseData.title} assigned successfully to user ${userId}.`);
      } else {
        setMessage('Selected course not found.');
      }
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
          Current Courses: {userClasses ? Object.values(userClasses).map(c => `${c.number} - ${c.title}`).join(', ') : 'None'}
        </Typography>
        <FormControl sx={{ minWidth: 200, mr: 2 }}>
          <InputLabel>Course</InputLabel>
          <Select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            {courses.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {`${course.number} - ${course.title}`}
              </MenuItem>
            ))}
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
  const [userClasses, setUserClasses] = useState<Record<string, { number: string; title: string }> | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newStatus, setNewStatus] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courses, setCourses] = useState<Course[]>([]); // Added state for storing courses
  const db = getFirestore();

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesCollection = collection(db, 'courses');
        const coursesSnapshot = await getDocs(coursesCollection);
        const coursesData = coursesSnapshot.docs.map(doc => ({
          id: doc.id,
          number: doc.data().number,
          title: doc.data().title
        }) as Course);
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [db]);

  const fetchUserDetails = async () => {
    if (!userId) {
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
        setUserClasses(userData.classes);
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
      const usersData = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }) as User);
      setUsers(usersData);
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
      setIsAdmin(newStatus);

      // Update user list locally instead of re-fetching from the database
      const updatedUsers = users.map((user) => {
        if (user.id === userId) {
          return { ...user, isAdmin: newStatus };
        }
        return user;
      });

      setUsers(updatedUsers);

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

  const handleCourseChange = (event: SelectChangeEvent<string>) => {
    setSelectedCourse(event.target.value as string);
  };

  const filteredUsers = (users: User[]) => {
    if (selectedCourse) {
      return users.filter(user => user.classes && user.classes.hasOwnProperty(selectedCourse));
    }
    return users;
  };

  const handleUserDeleted = (success: boolean) => {
    if (success) {
      setMessage('User account deleted successfully.');
      setUserExists(false);
      setUserId('');
      fetchAllUsers();
    } else {
      setMessage('Error deleting user account.');
    }
    setOpenSnackbar(true);
  };

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
        Use this page to view and manage user permissions. Enter the User ID to grant or revoke admin privileges, or delete user account.
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
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                fetchUserDetails();
                e.preventDefault();
              }
            }}
            sx={{ minWidth: '300px' }}
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
                <AssignCourse userId={userId} userClasses={userClasses} courses={courses} />
                <DeleteUser userId={userId} onUserDeleted={handleUserDeleted} />
              </Paper>
            )
          )}
        </form>
      </Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Current Users
      </Typography>
      <FormControl fullWidth sx={{ mb: 3, width: '25%' }}>
        <InputLabel>Filter by Course</InputLabel>
        <Select
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          <MenuItem value="">All Courses</MenuItem>
          {courses.map(course => (
            <MenuItem key={course.id} value={course.id}>{course.number}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <UserTable users={filteredUsers(users)} />
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