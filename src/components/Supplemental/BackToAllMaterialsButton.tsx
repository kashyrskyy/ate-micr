// src/components/Supplemental/BackToAllMaterialsButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackToAllMaterialsButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/supplemental-materials');
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<ArrowBackIcon />}
      onClick={handleClick}
      sx={{ mb: 2, padding: '4px 8px', backgroundColor: 'transparent', borderColor: 'blue', color: 'blue' }}
    >
      All Materials
    </Button>
  );
};

export default BackToAllMaterialsButton;