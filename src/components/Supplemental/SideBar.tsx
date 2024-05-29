// src/components/Supplemental/SideBar.tsx
import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

interface SidebarProps {
  sections: string[];
  onAddSection: () => void;
  onAddSubsection: (sectionIndex: number) => void;
  onSelectSection: (sectionIndex: number) => void;
}

const SideBar: React.FC<SidebarProps> = ({ sections, onAddSection, onAddSubsection, onSelectSection }) => {
  return (
    <Box sx={{ width: '250px', borderRight: '1px solid #ddd', padding: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Sections
      </Typography>
      <List>
        {sections.map((section, index) => (
          <ListItem key={index} button onClick={() => onSelectSection(index)}>
            <ListItemText primary={section} />
            <Button variant="text" onClick={() => onAddSubsection(index)}>+ Add Subsection</Button>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={onAddSection} sx={{ mt: 2 }}>
        + Add Section
      </Button>
    </Box>
  );
};

export default SideBar;