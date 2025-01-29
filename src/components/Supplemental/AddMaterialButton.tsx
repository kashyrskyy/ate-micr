// src/components/Supplemental/AddMaterialButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddMaterialButton: React.FC<{ selectedCourse: string | null }> = ({ selectedCourse }) => {
  const navigate = useNavigate();

  return (
    <Button
      className="add-material-button"
      variant="contained"
      color="primary"
      disabled={!selectedCourse}
      onClick={() => selectedCourse && navigate(`/add-material?course=${selectedCourse}`)}
    >
      + Add Material
    </Button>
  );
};

export default AddMaterialButton;