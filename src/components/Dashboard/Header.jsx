// Header.jsx
import React, { useState, memo } from 'react';

import { useUser } from '../../contexts/UserContext';

import Logout from '../Logout';

import { Typography, Button, Box, Chip, Snackbar, Alert, Tooltip } from '@mui/material';

const Header = memo(({ setIsAdding }) => {
  const { userDetails } = useUser();
  console.log("Header loaded");

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopyUserId = () => {
    navigator.clipboard.writeText(userDetails.uid).then(() => {
      // Open the snackbar on successful copy
      setOpenSnackbar(true);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  // Close snackbar
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ mt: 3, mb: 2 }}>
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
          <Tooltip title="Click to Copy" enterDelay={300} leaveDelay={200}>
            <Chip
              label={`User ID: ${userDetails.uid}`}
              variant="outlined"
              onClick={handleCopyUserId}
              sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#e0f2f1', color: '#00695c', mr: 1, cursor: 'pointer' }}
            />
          </Tooltip>
        </Box>
      )}
      {/* Action buttons below */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="contained" color="primary" onClick={() => setIsAdding(true)} sx={{ fontSize: '1.2rem', textTransform: 'none' }}>
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