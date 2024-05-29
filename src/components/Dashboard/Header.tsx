// Header.tsx
import React, { useState, memo } from 'react';
import { useUser } from '../../contexts/UserContext';
import Logout from '../Logout';
import { Typography, Button, Box, Chip, Snackbar, Alert, Tooltip, SnackbarCloseReason } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

interface HeaderProps {
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = memo(({ setIsAdding }) => {
  const { userDetails } = useUser();
  console.log("Header loaded");

  const navigate = useNavigate(); // Initialize useNavigate hook

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [copied, setCopied] = useState(false);

  const handleCopyUserId = () => {
    // Check if userDetails exists before accessing its uid property
    if (userDetails?.uid) {
      navigator.clipboard.writeText(userDetails.uid)
        .then(() => {
          // Open the snackbar on successful copy
          setOpenSnackbar(true);
          // Set copied state to true
          setCopied(true);
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
        });
    } else {
      console.error('User details are null or undefined');
    }
  };  
  
  // Close snackbar
  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

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
      {userDetails && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}> 
          {userDetails.isAdmin && (
            <Chip 
              label="Admin" 
              variant="outlined" 
              sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#ffcdd2', color: '#c62828', mr: 1 }} 
            />
          )}
          <Tooltip title={copied ? "Copied!" : "Click to Copy"} enterDelay={300} leaveDelay={200}>
            <Chip
              label={`User ID: ${userDetails.uid}`}
              variant="outlined"
              onClick={handleCopyUserId}
              sx={{
                borderRadius: '15px',
                fontWeight: 'bold',
                background: '#e0f2f1',
                color: '#00695c',
                mr: 1,
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            />
          </Tooltip>
        </Box>
      )}
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
        <Logout />
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          User ID copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
});

export default Header;