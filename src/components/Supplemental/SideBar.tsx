// src/components/Supplemental/SideBar.tsx
import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, TextField, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteSectionSubsection from './DeleteSectionSubsection'; // Import the new component

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
  selected: { sectionIndex?: number, subsectionIndex?: number, type?: 'header' | 'footer' };
  onAddSection: () => void;
  onAddSubsection: (sectionIndex: number) => void;
  onSelectSection: (sectionIndex: number | 'header' | 'footer', subsectionIndex?: number) => void;
  onUpdateSectionTitle: (sectionIndex: number, newTitle: string) => void;
  onUpdateSubsectionTitle: (sectionIndex: number, subsectionIndex: number, newTitle: string) => void;
  onDeleteSection: (sectionIndex: number) => void; // Add new prop for deleting section
  onDeleteSubsection: (sectionIndex: number, subsectionIndex: number) => void; // Add new prop for deleting subsection
}

const SideBar: React.FC<SidebarProps> = ({
  sections,
  selected,
  onAddSection,
  onAddSubsection,
  onSelectSection,
  onUpdateSectionTitle,
  onUpdateSubsectionTitle,
  onDeleteSection, // Destructure new prop
  onDeleteSubsection, // Destructure new prop
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
    <Box sx={{ width: '450px', borderRight: '1px solid #ddd', padding: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Outline
      </Typography>
      <Button variant="contained" color="primary" onClick={onAddSection} sx={{ mb: 2 }}>
        + Add Section
      </Button>
      <List>
        <ListItem 
          button 
          onClick={() => onSelectSection('header')}
          sx={{ backgroundColor: selected.type === 'header' ? 'lightgray' : 'transparent' }}
        >
          <ListItemText primary="Header" />
        </ListItem>
        {sections.map((section, sectionIndex) => (
          <Box key={section.id}>
            <ListItem 
              button 
              onClick={() => onSelectSection(sectionIndex)}
              sx={{ backgroundColor: selected.sectionIndex === sectionIndex && selected.subsectionIndex === undefined ? 'lightgray' : 'transparent' }}
            >
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
                  <DeleteSectionSubsection // Add delete button for section
                    onDelete={() => onDeleteSection(sectionIndex)}
                    itemType="section"
                  />
                </>
              )}
              <Button variant="text" onClick={() => onAddSubsection(sectionIndex)} size="small">
                + Add Subsection
              </Button>
            </ListItem>
            <List sx={{ pl: 4 }}>
              {section.subsections.map((subsection, subsectionIndex) => (
                <ListItem 
                  key={subsection.id} 
                  button 
                  onClick={() => onSelectSection(sectionIndex, subsectionIndex)}
                  sx={{ backgroundColor: selected.sectionIndex === sectionIndex && selected.subsectionIndex === subsectionIndex ? 'lightgray' : 'transparent' }}
                >
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
                      <DeleteSectionSubsection // Add delete button for subsection
                        onDelete={() => onDeleteSubsection(sectionIndex, subsectionIndex)}
                        itemType="subsection"
                      />
                    </>
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
        <ListItem 
          button 
          onClick={() => onSelectSection('footer')}
          sx={{ backgroundColor: selected.type === 'footer' ? 'lightgray' : 'transparent' }}
        >
          <ListItemText primary="Footer" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;