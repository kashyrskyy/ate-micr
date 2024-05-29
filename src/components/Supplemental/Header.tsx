// src/components/Supplemental/Header.tsx
// Header for Supplemental Materials page
import React, { useState } from 'react';
import { Box, Typography, Chip, Tooltip, Snackbar, Alert, SnackbarCloseReason, Button } from '@mui/material';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Logout from '../Logout';

const Header: React.FC = () => {
  const { userDetails } = useUser();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyUserId = () => {
    if (userDetails?.uid) {
      navigator.clipboard.writeText(userDetails.uid)
        .then(() => {
          setOpenSnackbar(true);
          setCopied(true);
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
        });
    } else {
      console.error('User details are null or undefined');
    }
  };

  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="text" onClick={handleNavigateHome} sx={{ mr: 2 }}>
          &larr; Home Page
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Supplemental Materials
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {userDetails?.isAdmin && (
            <Chip 
              label="Admin" 
              variant="outlined" 
              sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#ffcdd2', color: '#c62828', mr: 1 }} 
            />
          )}
          {userDetails && (
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
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  mr: 2,
                }}
              />
            </Tooltip>
          )}
          <Logout />
        </Box>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            User ID copied to clipboard!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Header;