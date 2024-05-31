// src/components/Supplemental/AddMaterialForm.tsx
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Snackbar, Alert, Typography, IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';
import SideBar from './SideBar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Subsection {
  id: string;
  title: string;
  content: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
  subsections: Subsection[];
}

const AddMaterialForm: React.FC = () => {
  const navigate = useNavigate();
  const { userDetails } = useUser();
  const db = getFirestore();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sections, setSections] = useState<Section[]>([
    { id: '1', title: 'Section 1', content: '', subsections: [] }
  ]);
  const [selectedSection, setSelectedSection] = useState<{ sectionIndex: number, subsectionIndex?: number }>({ sectionIndex: 0 });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'success'>('success');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handleNavigate('prev');
      } else if (event.key === 'ArrowRight') {
        handleNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSection, sections]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      setSnackbarMessage('Please fill in all fields');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    try {
      await addDoc(collection(db, 'materials'), {
        title,
        description,
        author: userDetails?.uid,
        timestamp: serverTimestamp(),
        published: false,
        sections,
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
    setSections([...sections, { id: (sections.length + 1).toString(), title: `Section ${sections.length + 1}`, content: '', subsections: [] }]);
  };

  const handleAddSubsection = (sectionIndex: number) => {
    const newSections = [...sections];
    const section = newSections[sectionIndex];
    section.subsections.push({ id: (section.subsections.length + 1).toString(), title: `Subsection ${section.subsections.length + 1}`, content: '' });
    setSections(newSections);
    setSelectedSection({ sectionIndex, subsectionIndex: section.subsections.length - 1 });
  };

  const handleSelectSection = (sectionIndex: number, subsectionIndex?: number) => {
    setSelectedSection({ sectionIndex, subsectionIndex });
  };

  const handleUpdateSectionTitle = (sectionIndex: number, newTitle: string) => {
    const newSections = [...sections];
    newSections[sectionIndex].title = newTitle;
    setSections(newSections);
  };

  const handleUpdateSubsectionTitle = (sectionIndex: number, subsectionIndex: number, newTitle: string) => {
    const newSections = [...sections];
    newSections[sectionIndex].subsections[subsectionIndex].title = newTitle;
    setSections(newSections);
  };

  const handleUpdateContent = (sectionIndex: number, content: string, subsectionIndex?: number) => {
    const newSections = [...sections];
    if (subsectionIndex !== undefined) {
      newSections[sectionIndex].subsections[subsectionIndex].content = content;
    } else {
      newSections[sectionIndex].content = content;
    }
    setSections(newSections);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    const { sectionIndex, subsectionIndex } = selectedSection;

    if (direction === 'prev') {
      if (subsectionIndex !== undefined && subsectionIndex > 0) {
        setSelectedSection({ sectionIndex, subsectionIndex: subsectionIndex - 1 });
      } else if (subsectionIndex !== undefined && subsectionIndex === 0) {
        setSelectedSection({ sectionIndex });
      } else if (subsectionIndex === undefined && sectionIndex > 0) {
        const prevSection = sections[sectionIndex - 1];
        setSelectedSection({
          sectionIndex: sectionIndex - 1,
          subsectionIndex: prevSection.subsections.length ? prevSection.subsections.length - 1 : undefined,
        });
      }
    } else if (direction === 'next') {
      if (subsectionIndex === undefined && sections[sectionIndex].subsections.length) {
        setSelectedSection({ sectionIndex, subsectionIndex: 0 });
      } else if (subsectionIndex !== undefined && subsectionIndex < sections[sectionIndex].subsections.length - 1) {
        setSelectedSection({ sectionIndex, subsectionIndex: subsectionIndex + 1 });
      } else if (subsectionIndex !== undefined && subsectionIndex === sections[sectionIndex].subsections.length - 1 && sectionIndex < sections.length - 1) {
        setSelectedSection({ sectionIndex: sectionIndex + 1 });
      } else if (subsectionIndex === undefined && sectionIndex < sections.length - 1) {
        setSelectedSection({ sectionIndex: sectionIndex + 1 });
      }
    }
  };

  const currentContent = selectedSection.subsectionIndex !== undefined
    ? sections[selectedSection.sectionIndex].subsections[selectedSection.subsectionIndex].content
    : sections[selectedSection.sectionIndex].content;

  const currentTitle = selectedSection.subsectionIndex !== undefined
    ? sections[selectedSection.sectionIndex].subsections[selectedSection.subsectionIndex].title
    : sections[selectedSection.sectionIndex].title;

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <SideBar
        sections={sections}
        onAddSection={handleAddSection}
        onAddSubsection={handleAddSubsection}
        onSelectSection={handleSelectSection}
        onUpdateSectionTitle={handleUpdateSectionTitle}
        onUpdateSubsectionTitle={handleUpdateSubsectionTitle}
      />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {currentTitle}
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={10}
          value={currentContent}
          onChange={(e) => handleUpdateContent(selectedSection.sectionIndex, e.target.value, selectedSection.subsectionIndex)}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Tooltip title="Previous" arrow>
            <span>
              <IconButton
                onClick={() => handleNavigate('prev')}
                disabled={selectedSection.sectionIndex === 0 && selectedSection.subsectionIndex === undefined}
              >
                <ArrowBackIosIcon />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Next" arrow>
            <span>
              <IconButton
                onClick={() => handleNavigate('next')}
                disabled={
                  selectedSection.sectionIndex === sections.length - 1 &&
                  (selectedSection.subsectionIndex === undefined ||
                    selectedSection.subsectionIndex === sections[selectedSection.sectionIndex].subsections.length - 1)
                }
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </span>
          </Tooltip>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
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
