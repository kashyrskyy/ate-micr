// src/components/Messages/AddMessage.tsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, TextareaAutosize } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

import CourseSelector from './CourseSelector';

interface Link {
  title: string;
  url: string;
}

const AddMessage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState<Link[]>([{ title: '', url: '' }]);

  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const navigate = useNavigate();
  const db = getFirestore();

  const handleAddMessage = async () => {
    try {
      if (!selectedCourse) {
        alert('Please select a course to post the message.');
        return;
      }

      await addDoc(collection(db, 'messages'), {
        title,
        description,
        links,
        course: selectedCourse,
        postedOn: serverTimestamp(),
        isPinned: false,
      });
      navigate('/');
    } catch (error) {
      console.error('Error adding message: ', error);
    }
  };

  const handleCancel = () => navigate('/');

  const handleLinkChange = (index: number, field: keyof Link, value: string) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const addLinkField = () => setLinks([...links, { title: '', url: '' }]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Message
        </Typography>

        <CourseSelector value={selectedCourse} onChange={setSelectedCourse} />

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
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Links
        </Typography>
        {links.map((link, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <TextField
              label={`Link Title ${index + 1}`}
              fullWidth
              value={link.title}
              onChange={(e) => handleLinkChange(index, 'title', e.target.value)}
              sx={{ mb: 1 }}
            />
            <TextField
              label={`Link URL ${index + 1}`}
              fullWidth
              value={link.url}
              onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
            />
          </Box>
        ))}
        <Button variant="text" onClick={addLinkField} sx={{ mb: 2 }}>
          + Add another link
        </Button>
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
              backgroundColor: '#CDDAFF',
              color: '#424242',
              '&:hover': {
                backgroundColor: '#0B53C0',
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