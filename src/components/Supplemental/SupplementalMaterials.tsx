// src/components/Supplemental/SupplementalMaterials.tsx
import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import AddMaterialButton from './AddMaterialButton';
import MaterialGrid from './MaterialGrid';
import { useUser } from '../../contexts/UserContext';

const SupplementalMaterials: React.FC = () => {
  const { userDetails } = useUser();

  return (
    <Box className="supplemental-container">
      <Header />
      <Box className="supplemental-content">
        {userDetails?.isAdmin && <AddMaterialButton />}
        <MaterialGrid />
      </Box>
    </Box>
  );
};

export default SupplementalMaterials;