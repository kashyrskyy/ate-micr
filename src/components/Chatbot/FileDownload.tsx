// src/components/Chatbot/FileDownload.tsx
import React from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Box, Link, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

interface FileDownloadProps {
  filePath: string; // Path of the file in Firebase Storage
  fileLabel: string; // Label to display for the file
}

const FileDownload: React.FC<FileDownloadProps> = ({ filePath, fileLabel }) => {
  const handleDownload = async () => {
    try {
      const storage = getStorage();
      const fileRef = ref(storage, filePath);
      const downloadUrl = await getDownloadURL(fileRef);

      // Trigger file download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', filePath.split('/').pop() || 'file'); // Set the download attribute with the file name
      document.body.appendChild(link); // Append link to the body
      link.click(); // Simulate click
      document.body.removeChild(link); // Remove link after clicking
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Failed to download file. Please check your permissions.');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleDownload();
        }}
        sx={{
          textDecoration: 'none',
          color: '#1976d2',
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        {fileLabel}
      </Link>
      <IconButton
        onClick={handleDownload}
        aria-label="Download"
        size="small"
      >
        <DownloadIcon />
      </IconButton>
    </Box>
  );
};

export default FileDownload;