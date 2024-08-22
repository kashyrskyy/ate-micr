// src/components/Supplemental/Header.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <Box>
      <Box className="supplemental-header">
        <Button variant="text" onClick={handleNavigateHome} className="supplemental-back-button">
          &larr; Home Page
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography className="supplemental-title">
          Course Materials
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;