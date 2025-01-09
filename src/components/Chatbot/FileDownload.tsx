// src/components/Chatbot/FileDownload.tsx
import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Box, Link, IconButton, CircularProgress, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

interface FileDownloadProps {
  filePath: string; // Path of the file in Firebase Storage
  fileLabel: string; // Label to display for the file
}

const FileDownload: React.FC<FileDownloadProps> = ({ filePath, fileLabel }) => {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDownloadUrl = async () => {
      try {
        const storage = getStorage();
        const fileRef = ref(storage, filePath);
        const url = await getDownloadURL(fileRef);
        setDownloadUrl(url);
      } catch (error) {
        console.error('Error fetching download URL:', error);
        alert('Failed to fetch file URL. Please check your permissions.');
      } finally {
        setLoading(false);
      }
    };

    fetchDownloadUrl();
  }, [filePath]);

  if (loading) {
    return <CircularProgress size={20} />;
  }

  if (!downloadUrl) {
    return (
      <Box>
        <Typography color="error">Failed to load file link</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Link
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          color: '#1976d2',
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        {fileLabel}
      </Link>
      <IconButton
        component="a"
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open in new tab"
        size="small"
      >
        <DownloadIcon />
      </IconButton>
    </Box>
  );
};

export default FileDownload;