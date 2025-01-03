// src/components/Chatbot/ChatbotRequestPage.tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import FileUpload from './FileUpload';

const ChatbotRequestPage: React.FC = () => {
  const { userDetails } = useUser();
  const navigate = useNavigate();
  const db = getFirestore();

  const [title, setTitle] = useState('');
  const [courseId, setCourseId] = useState('');
  const [uploadedFileUrls, setUploadedFileUrls] = useState<string[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleFileUploadComplete = (fileUrls: string[]) => {
    setUploadedFileUrls(fileUrls);
  };

  const handleSubmit = async () => {
    if (!title || !courseId || uploadedFileUrls.length === 0) {
      setSnackbarMessage('Please fill all required fields and upload at least one file.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    // Retrieve course details
    const selectedCourse = userDetails?.classes?.[courseId];
    if (!selectedCourse) {
        setSnackbarMessage('Selected course details could not be found.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        return;
    }

    const courseNumber = selectedCourse.number || 'N/A';
    const courseTitle = selectedCourse.title || 'Untitled Course';

    try {
      await addDoc(collection(db, 'chatbotRequests'), {
        educatorId: userDetails?.uid,
        courseId,
        courseNumber,
        courseTitle,
        title,
        files: uploadedFileUrls,
        status: 'pending',
        timestamp: new Date().toISOString(),
      });

      setSnackbarMessage('Chatbot request submitted successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      setTimeout(() => navigate('/chatbot-management'), 1500); // Navigate to Chatbot Management page
    } catch (error) {
      console.error('Error submitting chatbot request:', error);
      setSnackbarMessage('Failed to submit the chatbot request. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleNavigateBack = () => {
    navigate('/chatbot-management');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box className="profile-container" sx={{ p: 4 }}>
      <Button variant="text" onClick={handleNavigateBack} className="profile-button">
        &larr; Chatbot Management
      </Button>

      <Typography className="webpage_title" sx={{ mb: 2 }}>
        Request to Create a Chatbot
      </Typography>

      <Typography variant="body1" className="profile-text" sx={{ mb: 3 }}>
        Fill out the form below to request a chatbot. Please upload all related materials (PDF format only) for the chatbot's knowledge base.
      </Typography>

      <TextField
        label="Chatbot Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        required
        className="form-field"
      />

      <TextField
        label="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        fullWidth
        margin="normal"
        required
        select
        className="form-field"
      >
        {Object.keys(userDetails?.classes || {}).map((id) => (
          <MenuItem key={id} value={id}>
            {userDetails?.classes?.[id]?.title || 'Untitled Course'}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body1" className="profile-text" sx={{ mb: 2 }}>
          Upload your PDF files below:
        </Typography>
        <FileUpload
          folderPath={`chatbotRequests/${userDetails?.uid}`}
          onUploadComplete={handleFileUploadComplete}
        />
      </Box>

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ mt: 4 }}
        className="submit-button"
      >
        Submit Request
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert severity={snackbarSeverity} onClose={handleCloseSnackbar}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ChatbotRequestPage;