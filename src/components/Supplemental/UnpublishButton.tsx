// src/components/Supplemental/UnpublishButton.tsx
import React from 'react';
import { Button } from '@mui/material';

interface UnpublishButtonProps {
  materialId: string;
  onClick: (materialId: string) => void;
}

const UnpublishButton: React.FC<UnpublishButtonProps> = ({ materialId, onClick }) => {
  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => onClick(materialId)}
      sx={{
        backgroundColor: '#FFCDD2',
        color: '#C62828',
        borderRadius: '15px',
        fontWeight: 'bold',
        padding: '4px 8px',
        ml: 1,
        textTransform: 'none'
      }}
    >
      Unpublish
    </Button>
  );
};

export default UnpublishButton;