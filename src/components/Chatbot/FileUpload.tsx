// src/components/Chatbot/FileUpload.tsx
import React, { useState } from 'react';
import { Box, Button, CircularProgress, Typography, Alert } from '@mui/material';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface FileUploadProps {
  folderPath: string; // Path in Firebase Storage to save files
  onUploadComplete: (newFileUrls: string[]) => void; // Callback when upload is complete
}

const FileUpload: React.FC<FileUploadProps> = ({ folderPath, onUploadComplete }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const maxSizeMB = 5 * 1024 * 1024; // 5 MB

  // Allowed file extensions
  const allowedExtensions = ['.pdf', '.ppt', '.pptx', '.doc', '.docx', '.txt'];

  const handleFileSelectAndUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const storage = getStorage();
    const newFileUrls: string[] = []; // New file URLs from the upload process

    setUploading(true);
    setUploadError(null);

    try {
      for (const file of files) {
        // Validate file extension
        const extension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
        if (!allowedExtensions.includes(extension)) {
          setUploadError(`File ${file.name} is not a supported format.`);
          continue;
        }

        // Validate file size
        if (file.size > maxSizeMB) {
          setUploadError(`File ${file.name} exceeds the 5 MB limit and cannot be uploaded.`);
          continue;
        }

        // Upload file to Firebase Storage
        const storageRef = ref(storage, `${folderPath}/files/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadUrl = await getDownloadURL(storageRef);
        newFileUrls.push(downloadUrl); // Store the new file URLs
      }

      setSelectedFiles((prevFiles) => [...prevFiles, ...files]); // Append to selected files for UI feedback
      onUploadComplete(newFileUrls); // Pass only new URLs to the parent
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
        accept=".pdf,.ppt,.pptx,.doc,.docx,.txt"
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
          {uploading ? 'Uploading...' : 'Select and Upload Files'}
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