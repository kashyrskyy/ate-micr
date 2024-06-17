// src/components/Supplemental/ImageGallery.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface ImageGalleryProps {
  images: { url: string; title: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
      {images.map((image, index) => (
        <Box key={index} sx={{ mb: 4, textAlign: 'center' }}>
          <img src={image.url} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '500px', marginBottom: '8px' }} />
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>{image.title}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ImageGallery;