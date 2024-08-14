// src/components/EducatorRequests/EducatorRequestsAdminPage.tsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Snackbar, Alert, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { getFirestore, collection, getDocs, doc, updateDoc, addDoc, arrayUnion } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

// Define the interface for the request data
interface EducatorRequest {
  id: string;
  firstName: string;
  lastName: string;
  uid: string;
  institution: string;
  email: string;
  courseName: string;
  courseDescription: string;
  additionalInfo?: string;
  timestamp: { seconds: number; nanoseconds: number };
  status: 'pending' | 'approved' | 'denied';
}

const EducatorRequestsAdminPage: React.FC = () => {
  const [requests, setRequests] = useState<EducatorRequest[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState<'approve' | 'deny' | null>(null);
  const [currentRequestId, setCurrentRequestId] = useState<string | null>(null);
  const [currentRequestData, setCurrentRequestData] = useState<EducatorRequest | null>(null);
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      const querySnapshot = await getDocs(collection(db, 'educatorRequests'));
      const fetchedRequests = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as EducatorRequest[];

      fetchedRequests.sort((a, b) => {
        if (a.status === 'pending' && b.status !== 'pending') return -1;
        if (a.status === 'approved' && b.status === 'denied') return -1;
        if (a.status === 'denied' && b.status === 'approved') return 1;
        return 0;
      });

      setRequests(fetchedRequests);
    };
    fetchRequests();
  }, [db]);

  // Function to generate a unique 28-character passcode
  function generatePasscode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let passcode = '';
    for (let i = 0; i < 28; i++) {
      passcode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return passcode;
  }

  const handleApprove = async () => {
    if (!currentRequestId || !currentRequestData) return;

    try {
      const passcode = generatePasscode();
      const courseDocRef = await addDoc(collection(db, 'courses'), {
        name: currentRequestData.courseName,
        passcode: passcode,
        courseAdmin: currentRequestData.uid
      });

      const userDocRef = doc(db, 'users', currentRequestData.uid);
      await updateDoc(userDocRef, {
        isAdmin: true,
        class: arrayUnion(currentRequestData.courseName)
      });

      await updateDoc(doc(db, 'educatorRequests', currentRequestId), {
        status: 'approved',
        courseId: courseDocRef.id,
        passcode: passcode
      });

      setSnackbarMessage('Request approved, course added, and user promoted to educator.');
      setSnackbarSeverity('success');
      setRequests(requests.map(request => request.id === currentRequestId ? { ...request, status: 'approved' } : request));
    } catch (error) {
      console.error('Error approving request: ', error);
      setSnackbarMessage('Error approving the request. Please try again.');
      setSnackbarSeverity('error');
    }
    setOpenSnackbar(true);
    handleCloseDialog();
  };

  const handleDeny = async () => {
    if (!currentRequestId) return;

    try {
      await updateDoc(doc(db, 'educatorRequests', currentRequestId), {
        status: 'denied'
      });
      setSnackbarMessage('Request denied.');
      setSnackbarSeverity('success');
      setRequests(requests.map(request => request.id === currentRequestId ? { ...request, status: 'denied' } : request));
    } catch (error) {
      console.error('Error denying request: ', error);
      setSnackbarMessage('Error denying the request. Please try again.');
      setSnackbarSeverity('error');
    }
    setOpenSnackbar(true);
    handleCloseDialog();
  };

  const handleOpenDialog = (action: 'approve' | 'deny', requestId: string, requestData: EducatorRequest) => {
    setCurrentAction(action);
    setCurrentRequestId(requestId);
    setCurrentRequestData(requestData);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setCurrentAction(null);
    setCurrentRequestId(null);
    setCurrentRequestData(null);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="text" onClick={handleNavigateHome} sx={{ mr: 2 }}>
          &larr; Home Page
        </Button>
      </Box>

      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
        Educator Permission Requests
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Institution</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Course Description</TableCell>
              <TableCell>Additional Info</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{`${request.firstName} ${request.lastName}`}</TableCell>
                <TableCell>{request.uid}</TableCell>
                <TableCell>{request.institution}</TableCell>
                <TableCell>{request.email}</TableCell>
                <TableCell>{request.courseName}</TableCell>
                <TableCell>{request.courseDescription}</TableCell>
                <TableCell>{request.additionalInfo || 'N/A'}</TableCell>
                <TableCell>{new Date(request.timestamp.seconds * 1000).toLocaleString()}</TableCell>
                <TableCell>
                  {request.status === 'pending' && (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mr: 1 }}
                        onClick={() => handleOpenDialog('approve', request.id, request)}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleOpenDialog('deny', request.id, request)}
                      >
                        Deny
                      </Button>
                    </>
                  )}
                  {request.status === 'approved' && (
                    <Typography color="success.main">Approved</Typography>
                  )}
                  {request.status === 'denied' && (
                    <Typography color="error.main">Denied</Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Confirmation Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-dialog-description"
      >
        <DialogTitle id="confirmation-dialog-title">
          {currentAction === 'approve' ? 'Confirm Approval' : 'Confirm Denial'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirmation-dialog-description">
            Are you sure you want to {currentAction} this request for {currentRequestData?.firstName} {currentRequestData?.lastName}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={currentAction === 'approve' ? handleApprove : handleDeny}
            color="primary"
            variant="contained"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EducatorRequestsAdminPage;