// src/components/Supplemental/AddMaterialForm.tsx
import React, { useState } from 'react';
import { Box, TextField, Button, Snackbar, Alert, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';
import SideBar from './SideBar';

const AddMaterialForm: React.FC = () => {
  const navigate = useNavigate();
  const { userDetails } = useUser();
  const db = getFirestore();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [sections, setSections] = useState<string[]>(['Section 1']);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'success'>('success');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !date || !description) {
      setSnackbarMessage('Please fill in all fields');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    try {
      await addDoc(collection(db, 'materials'), {
        title,
        date,
        description,
        author: userDetails?.uid,
        timestamp: serverTimestamp(),
        published: false,
      });
      setSnackbarMessage('Material saved successfully');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      navigate('/supplemental-materials');
    } catch (error) {
      setSnackbarMessage('Failed to save material');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCancel = () => {
    navigate('/supplemental-materials');
  };

  const handleAddSection = () => {
    setSections([...sections, `Section ${sections.length + 1}`]);
  };

  const handleAddSubsection = (sectionIndex: number) => {
    const newSections = [...sections];
    newSections.splice(sectionIndex + 1, 0, `Subsection of ${sections[sectionIndex]}`);
    setSections(newSections);
  };

  const handleSelectSection = (sectionIndex: number) => {
    setSelectedSectionIndex(sectionIndex);
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <SideBar
        sections={sections}
        onAddSection={handleAddSection}
        onAddSubsection={handleAddSubsection}
        onSelectSection={handleSelectSection}
      />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add New Material
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Date"
            variant="outlined"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button type="button" variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ backgroundColor: 'green' }}
            >
              Publish for All
            </Button>
          </Box>
        </Box>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
          <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default AddMaterialForm;