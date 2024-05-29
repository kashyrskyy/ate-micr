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
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
        {userDetails?.isAdmin && <AddMaterialButton />}
        <MaterialGrid />
      </Box>
    </Box>
  );
};

export default SupplementalMaterials;
