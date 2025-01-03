// src/components/Chatbot/FileUpload.tsx
import React, { useState } from 'react';
import { Box, Button, CircularProgress, Typography, Alert } from '@mui/material';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface FileUploadProps {
  folderPath: string; // Path in Firebase Storage to save files
  onUploadComplete: (fileUrls: string[]) => void; // Callback when upload is complete
}

const FileUpload: React.FC<FileUploadProps> = ({ folderPath, onUploadComplete }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const maxSizeMB = 5 * 1024 * 1024; // 5 MB

  const handleFileSelectAndUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const storage = getStorage();
    const fileUrls: string[] = [];

    setUploading(true);
    setUploadError(null);

    try {
      for (const file of files) {
        if (file.size > maxSizeMB) {
          setUploadError(`File ${file.name} exceeds the 5 MB limit and cannot be uploaded.`);
          continue; // Skip files larger than 5 MB
        }

        const storageRef = ref(storage, `${folderPath}/pdf/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadUrl = await getDownloadURL(storageRef);
        fileUrls.push(downloadUrl);
      }

      onUploadComplete(fileUrls);
      setSelectedFiles(files.filter((file) => file.size <= maxSizeMB)); // Show only valid files
    } catch (error) {
      console.error('Error uploading files:', error);
      setUploadError('Failed to upload files. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box>
      <input
        type="file"
        accept=".pdf"
        multiple
        onChange={handleFileSelectAndUpload}
        style={{ display: 'none' }}
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <Button
          variant="contained"
          component="span"
          disabled={uploading}
          startIcon={uploading ? <CircularProgress size={20} /> : null}
        >
          {uploading ? 'Uploading...' : 'Select and Upload PDF Files'}
        </Button>
      </label>
      {uploadError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {uploadError}
        </Alert>
      )}
      <Box sx={{ marginTop: 2 }}>
        {selectedFiles.map((file, index) => (
          <Typography key={index}>{file.name}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default FileUpload;