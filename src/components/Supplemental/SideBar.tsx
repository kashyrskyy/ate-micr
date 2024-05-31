// src/components/Supplemental/SideBar.tsx
import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

interface Subsection {
  id: string;
  title: string;
}

interface Section {
  id: string;
  title: string;
  subsections: Subsection[];
}

interface SidebarProps {
  sections: Section[];
  onAddSection: () => void;
  onAddSubsection: (sectionIndex: number) => void;
  onSelectSection: (sectionIndex: number, subsectionIndex?: number) => void;
  onUpdateSectionTitle: (sectionIndex: number, newTitle: string) => void;
  onUpdateSubsectionTitle: (sectionIndex: number, subsectionIndex: number, newTitle: string) => void;
}

const SideBar: React.FC<SidebarProps> = ({
  sections,
  onAddSection,
  onAddSubsection,
  onSelectSection,
  onUpdateSectionTitle,
  onUpdateSubsectionTitle,
}) => {
  const [editingSectionIndex, setEditingSectionIndex] = useState<number | null>(null);
  const [editingSubsectionIndex, setEditingSubsectionIndex] = useState<{ section: number; subsection: number } | null>(null);
  const [newTitle, setNewTitle] = useState<string>('');

  const handleEditSection = (index: number, currentTitle: string) => {
    if (editingSectionIndex !== null) {
      onUpdateSectionTitle(editingSectionIndex, newTitle);
    } else if (editingSubsectionIndex) {
      onUpdateSubsectionTitle(editingSubsectionIndex.section, editingSubsectionIndex.subsection, newTitle);
    }

    setEditingSectionIndex(index);
    setEditingSubsectionIndex(null);
    setNewTitle(currentTitle);
  };

  const handleSaveSection = (index: number) => {
    onUpdateSectionTitle(index, newTitle);
    setEditingSectionIndex(null);
    setNewTitle('');
  };

  const handleEditSubsection = (sectionIndex: number, subsectionIndex: number, currentTitle: string) => {
    if (editingSectionIndex !== null) {
      onUpdateSectionTitle(editingSectionIndex, newTitle);
    } else if (editingSubsectionIndex) {
      onUpdateSubsectionTitle(editingSubsectionIndex.section, editingSubsectionIndex.subsection, newTitle);
    }

    setEditingSectionIndex(null);
    setEditingSubsectionIndex({ section: sectionIndex, subsection: subsectionIndex });
    setNewTitle(currentTitle);
  };

  const handleSaveSubsection = (sectionIndex: number, subsectionIndex: number) => {
    onUpdateSubsectionTitle(sectionIndex, subsectionIndex, newTitle);
    setEditingSubsectionIndex(null);
    setNewTitle('');
  };

  return (
    <Box sx={{ width: '250px', borderRight: '1px solid #ddd', padding: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Sections
      </Typography>
      <List>
        {sections.map((section, sectionIndex) => (
          <Box key={section.id}>
            <ListItem button onClick={() => onSelectSection(sectionIndex)}>
              {editingSectionIndex === sectionIndex ? (
                <>
                  <TextField
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <IconButton onClick={() => handleSaveSection(sectionIndex)} size="small">
                    <SaveIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <ListItemText primary={section.title} />
                  <IconButton onClick={() => handleEditSection(sectionIndex, section.title)} size="small">
                    <EditIcon />
                  </IconButton>
                </>
              )}
              <Button variant="text" onClick={() => onAddSubsection(sectionIndex)} size="small">
                + Add Subsection
              </Button>
            </ListItem>
            <List sx={{ pl: 4 }}>
              {section.subsections.map((subsection, subsectionIndex) => (
                <ListItem key={subsection.id} button onClick={() => onSelectSection(sectionIndex, subsectionIndex)}>
                  {editingSubsectionIndex &&
                    editingSubsectionIndex.section === sectionIndex &&
                    editingSubsectionIndex.subsection === subsectionIndex ? (
                    <>
                      <TextField
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        size="small"
                        sx={{ mr: 1 }}
                      />
                      <IconButton onClick={() => handleSaveSubsection(sectionIndex, subsectionIndex)} size="small">
                        <SaveIcon />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <ListItemText primary={subsection.title} />
                      <IconButton onClick={() => handleEditSubsection(sectionIndex, subsectionIndex, subsection.title)} size="small">
                        <EditIcon />
                      </IconButton>
                    </>
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={onAddSection} sx={{ mt: 2 }}>
        + Add Section
      </Button>
    </Box>
  );
};

export default SideBar;