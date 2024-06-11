// src/components/Supplemental/ImageTitle.tsx
import React from 'react';
import { TextField } from '@mui/material';

interface ImageTitleProps {
  imageTitle: string;
  onTitleChange: (newTitle: string) => void;
}

const ImageTitle: React.FC<ImageTitleProps> = ({ imageTitle, onTitleChange }) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      value={imageTitle}
      onChange={(e) => onTitleChange(e.target.value)}
      placeholder="Image Title"
      sx={{ mt: 1 }}
    />
  );
};

export default ImageTitle;