import React from 'react';

import useManageUserDocument from '../../hooks/useManageUserDocument';

import Logout from '../Logout';

import { Typography, Button, Box, Chip } from '@mui/material';

const Header = ({ setIsAdding }) => {
  const { userDetails } = useManageUserDocument();

  return (
    <Box sx={{ mt: 3, mb: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="left" sx={{ fontWeight: 'bold'}}>
        My Laboratory Notebook
      </Typography>
      {/* User information and Admin Mode indicator on the right */}
      {userDetails && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}> 
          {/* Display Admin Mode indicator if the user is an admin */}
          {userDetails.isAdmin && (
            <Chip 
              label="Admin" 
              variant="outlined" 
              sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#ffcdd2', color: '#c62828', mr: 1 }} 
            />
          )}
          <Chip 
            label={userDetails.displayName || 'No Name'} 
            variant="outlined" 
            sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#e0f2f1', color: '#00695c', mr: 1 }} 
          />
          <Chip 
            label={userDetails.email || 'No Email'} 
            variant="outlined" 
            sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#e1bee7', color: '#6a1b9a' }} 
          />
        </Box>
      )}
      {/* Action buttons below */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="contained" color="primary" onClick={() => setIsAdding(true)} sx={{ fontSize: '1.2rem', textTransform: 'none' }}>
          + Create New
        </Button>
        <Logout />
      </Box>
    </Box>
  );
};

export default Header;
