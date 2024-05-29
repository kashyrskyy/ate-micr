// src/components/Supplemental/AddMaterialButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddMaterialButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate('/add-material')}
      sx={{
        fontSize: '1.2rem',
        mt: 2,
        mb: 4,
        textTransform: 'none',
        minWidth: '150px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          transform: 'scale(1.05)',
        },
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        border: '1px solid transparent',
      }}
    >
      + Add Material
    </Button>
  );
};

export default AddMaterialButton;