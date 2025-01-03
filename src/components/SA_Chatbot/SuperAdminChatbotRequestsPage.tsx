// src/components/SA_Chatbot/SuperAdminChatbotRequestsPage.tsx
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Link,
  Paper,
  Button,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc, getDoc, getDocs, updateDoc, doc } from 'firebase/firestore';

const SuperAdminChatbotRequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [chatbotIdMap, setChatbotIdMap] = useState<{ [key: string]: string }>({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      const db = getFirestore();
      const requestsRef = collection(db, 'chatbotRequests');

      try {
        const querySnapshot = await getDocs(requestsRef);
        const requestsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRequests(requestsData);
      } catch (error) {
        console.error('Error fetching chatbot requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleChatbotIdChange = (id: string, value: string) => {
    setChatbotIdMap((prev) => ({ ...prev, [id]: value }));
  };

  const handleApproveRequest = async (requestId: string) => {
    const chatbotId = chatbotIdMap[requestId];
    if (!chatbotId) {
      setSnackbarMessage('Please assign a Chatbot ID before approving the request.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
  
    try {
      const db = getFirestore();
      const requestRef = doc(db, 'chatbotRequests', requestId);
      const requestSnapshot = await getDoc(requestRef);
  
      if (!requestSnapshot.exists()) {
        setSnackbarMessage('Request not found. Please refresh the page.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
        return;
      }
  
      const requestData = requestSnapshot.data();
  
      // Update the request document to approved status
      await updateDoc(requestRef, {
        status: 'approved',
        chatbotId,
      });
  
      // Add a new document to the chatbots collection
      const chatbotData = {
        chatbotId,
        title: requestData.title,
        courseId: {
          id: requestData.courseId,
          number: requestData.courseNumber,
          title: requestData.courseTitle,
        },
        createdBy: requestData.educatorId,
        files: requestData.files,
        timestamp: new Date().toISOString(),
      };
  
      await addDoc(collection(db, 'chatbots'), chatbotData);
  
      setRequests((prev) =>
        prev.map((req) =>
          req.id === requestId
            ? { ...req, status: 'approved', chatbotId }
            : req
        )
      );
      setSnackbarMessage('Chatbot request approved and chatbot created successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error approving request or creating chatbot:', error);
      setSnackbarMessage('Failed to approve the request and create the chatbot. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };  

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (requests.length === 0) {
    return (
      <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
        No chatbot requests found.
      </Typography>
    );
  }

  return (
    <Box className="profile-container" sx={{ p: 4 }}>
      {/* Back to Home Button */}
      <Button variant="text" onClick={() => navigate('/')} className="profile-button">
        &larr; Home Page
      </Button>

      <Typography variant="h5" className="webpage_title" sx={{ mb: 2 }}>
        Chatbot Requests Management
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Manage chatbot requests submitted by educators. Approve requests and assign Chatbot IDs.
      </Typography>

      <TableContainer component={Paper} elevation={3} sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Educator ID</TableCell>
              <TableCell>Course ID</TableCell>
              <TableCell>Submitted On</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>File Links</TableCell>
              <TableCell>Chatbot ID</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.title}</TableCell>
                <TableCell>{`${request.courseNumber} - ${request.courseTitle}`}</TableCell>
                <TableCell>{request.educatorId}</TableCell>
                <TableCell>{request.courseId}</TableCell>
                <TableCell>{new Date(request.timestamp).toLocaleString()}</TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    sx={{
                      color: request.status === 'pending' ? '#FFA726' : '#43A047',
                      fontWeight: 'bold',
                    }}
                  >
                    {request.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  {request.files.map((file: string, index: number) => (
                    <Link
                      href={file}
                      target="_blank"
                      key={index}
                      sx={{
                        display: 'block',
                        textDecoration: 'none',
                        color: '#1976d2',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      File {index + 1}
                    </Link>
                  ))}
                </TableCell>
                <TableCell>
                  {request.status === 'approved' ? (
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {request.chatbotId}
                    </Typography>
                  ) : (
                    <TextField
                      size="small"
                      value={chatbotIdMap[request.id] || ''}
                      onChange={(e) => handleChatbotIdChange(request.id, e.target.value)}
                      placeholder="Enter Chatbot ID"
                      sx={{ width: '150px' }}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleApproveRequest(request.id)}
                    disabled={request.status === 'approved'}
                  >
                    {request.status === 'approved' ? 'Approved' : 'Approve'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SuperAdminChatbotRequestsPage;