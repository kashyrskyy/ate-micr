// src/components/Supplemental/SupplementalMaterials.tsx
import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import AddMaterialButton from './AddMaterialButton';
import MaterialGrid from './MaterialGrid';
import { useUser } from '../../contexts/UserContext';

import { useSearchParams } from 'react-router-dom';

const SupplementalMaterials: React.FC = () => {
  const { userDetails } = useUser();

  const [searchParams] = useSearchParams();
  const course = searchParams.get('course'); // Extract the course ID from the URL

  return (
    <Box className="supplemental-container">
      <Header />
      <Box className="supplemental-content">
        {userDetails?.isAdmin && <AddMaterialButton />}
        <MaterialGrid initialCourse={course} /> {/* Pass the course ID as initialCourse */}
      </Box>
    </Box>
  );
};

export default SupplementalMaterials;