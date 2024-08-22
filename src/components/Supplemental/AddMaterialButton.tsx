// src/components/Supplemental/AddMaterialButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddMaterialButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      className="add-material-button"
      variant="contained"
      color="primary"
      onClick={() => navigate('/add-material')}
    >
      + Add Material
    </Button>
  );
};

export default AddMaterialButton;