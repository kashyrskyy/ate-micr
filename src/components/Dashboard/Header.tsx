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
    <Box sx={{ mt: 3, mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="text" onClick={handleNavigateHome} sx={{ mr: 2 }}>
          &larr; Home Page
        </Button>
      </Box>
      <Typography variant="h4" component="h1" gutterBottom textAlign="left" sx={{ fontWeight: 'bold'}}>
        My Laboratory Notebook
      </Typography>
      {/* Action buttons below */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setIsAdding(true)} 
          sx={{ 
            fontSize: '1.2rem',
            mt: 2, 
            textTransform: 'none',
            // Define a minimum width or width if necessary
            minWidth: '150px', // Adjust the width as needed to fit your design
            // Apply a box-shadow for hover effect instead of changing border or size
            boxShadow: 'none', // No box-shadow initially
            '&:hover': {
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
              // Use transform for visual feedback without layout shift
              transform: 'scale(1.05)',
            },
            // Transition for the transform property for smooth effect
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            // Prevent layout shift by applying a transparent border
            border: '1px solid transparent',
          }}
        >
          + Create New
        </Button>
      </Box>
    </Box>
  );
});

export default Header;