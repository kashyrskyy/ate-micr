// src/components/SelectionPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardActionArea, CardContent, Grid, Chip, Tooltip, Snackbar, Alert, SnackbarCloseReason } from '@mui/material';
import { useUser } from '../contexts/UserContext';
import Logout from './Logout';

const SelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { userDetails } = useUser();
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

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Home Page / ATE 2.0 
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
      </Box>
      <Typography variant="h5" align="center" gutterBottom>
        Navigate to:
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Card>
            <CardActionArea onClick={() => navigate('/laboratory-notebooks')}>
              <CardContent>
                <Typography variant="h5" component="div">
                  My Laboratory Notebook
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardActionArea onClick={() => navigate('/supplemental-materials')}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Supplemental Materials
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          User ID copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SelectionPage;