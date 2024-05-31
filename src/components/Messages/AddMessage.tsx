// src/components/Messages/AddMessage.tsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, TextareaAutosize } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const AddMessage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const db = getFirestore();

  const handleAddMessage = async () => {
    try {
      await addDoc(collection(db, 'messages'), {
        title,
        description,
        postedOn: serverTimestamp(),
      });
      navigate('/');
    } catch (error) {
      console.error('Error adding message: ', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Message
        </Typography>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextareaAutosize
          aria-label="description"
          minRows={4}
          placeholder="Description"
          style={{
            width: '100%',
            padding: '16.5px 14px',
            fontSize: '1rem',
            borderRadius: '4px',
            borderColor: 'rgba(0, 0, 0, 0.23)',
            marginBottom: '16px',
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            onClick={handleCancel}
            sx={{
              marginRight: '8px',
              borderColor: '#A5D6A7',
              color: '#424242',
              '&:hover': {
                borderColor: '#81C784',
                backgroundColor: 'rgba(165, 214, 167, 0.1)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleAddMessage}
            sx={{
              backgroundColor: '#A5D6A7',
              color: '#424242',
              '&:hover': {
                backgroundColor: '#81C784',
              },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddMessage;