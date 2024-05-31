// src/components/Messages/EditMessage.tsx
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Container, TextareaAutosize } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const EditMessage: React.FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const db = getFirestore();

  useEffect(() => {
    const fetchMessage = async () => {
      const messageRef = doc(db, 'messages', id!);
      const docSnap = await getDoc(messageRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title);
        setDescription(data.description);
      } else {
        console.log('No such document!');
      }
    };

    fetchMessage();
  }, [db, id]);

  const handleEditMessage = async () => {
    try {
      const messageRef = doc(db, 'messages', id!);
      await updateDoc(messageRef, {
        title,
        description,
      });
      navigate('/');
    } catch (error) {
      console.error('Error editing message: ', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Message
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
            onClick={handleEditMessage}
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

export default EditMessage;