// src/components/Messages/EditMessage.tsx
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Container, TextareaAutosize, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';

interface Link {
  title: string;
  url: string;
}

const EditMessage: React.FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState([{ title: '', url: '' }]);
  const [selectedCourse, setSelectedCourse] = useState<string>(''); // For single course selection

  const navigate = useNavigate();
  const db = getFirestore();
  const { userDetails } = useUser(); // Fetch user details from context

  useEffect(() => {
    const fetchMessage = async () => {
      const messageRef = doc(db, 'messages', id!);
      const docSnap = await getDoc(messageRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title);
        setDescription(data.description);
        setLinks(data.links || [{ title: '', url: '' }]);
        setSelectedCourse(data.course || '');
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
        links,
        course: selectedCourse, // Save selected course
      });
      navigate('/');
    } catch (error) {
      console.error('Error editing message: ', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleLinkChange = (index: number, field: keyof Link, value: string) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const addLinkField = () => {
    setLinks([...links, { title: '', url: '' }]);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Edit Message
          </Typography>
          {/* Course Selection */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="select-course-label">Course</InputLabel>
            <Select
              labelId="select-course-label"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value as string)}
              label="Course"
            >
              {userDetails?.classes &&
                Object.entries(userDetails.classes).map(([courseId, course]) => (
                  <MenuItem key={courseId} value={courseId}>
                    {`${course.number} - ${course.title}`}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        
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