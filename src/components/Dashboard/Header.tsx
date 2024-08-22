// Header.tsx
import React, { memo } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

interface HeaderProps {
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = memo(({ setIsAdding }) => {
  console.log("Header loaded");

  const navigate = useNavigate(); // Initialize useNavigate hook
  
  // Handler for navigating back to the home page
  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <Box className="lab-notebook-container">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="text" onClick={handleNavigateHome} className="back-home-button">
          &larr; Home Page
        </Button>
      </Box>
      <Typography className="webpage_title">
        My Laboratory Notebook
      </Typography>
      {/* Action buttons below */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button 
          className="create-new-button"
          variant="contained" 
          color="primary" 
          onClick={() => setIsAdding(true)} 
        >
          + Create New
        </Button>
      </Box>
    </Box>
  );
});

export default Header;