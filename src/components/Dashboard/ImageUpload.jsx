// ImageUpload.jsx
import React, { useState, useRef, useEffect } from 'react';
import { getStorage, ref as firebaseRef, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import imageCompression from 'browser-image-compression';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import DeleteIcon from '@mui/icons-material/Delete';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ImageUpload = ({ path, imageUrl, setImageUrl, imageStoragePath, setImageStoragePath, imageTitle, setImageTitle, onDelete }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const fileInputRef = useRef(null);

  const imgRef = useRef(null);

  const [isFullScreen, setIsFullScreen] = useState(false);

  // Add states for Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info'); // 'success', 'error', etc.

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    };

    try {
      let compressedFile = file;
      if (file.size > 1024 * 1024) {
        compressedFile = await imageCompression(file, options);

        setSnackbarMessage('Your image was compressed before uploading due to file size larger than 1 MB.');
        setSnackbarSeverity('info');
        setSnackbarOpen(true);
      }

      setUploading(true);
      const uniqueIdentifier = new Date().getTime();
      const modifiedFileName = `${uniqueIdentifier}-${compressedFile.name}`;
      const storage = getStorage();
      const storageRef = firebaseRef(storage, `${path}/${modifiedFileName}`);
      const uploadTask = uploadBytesResumable(storageRef, compressedFile);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Upload failed:", error);
          setUploading(false);
          setUploadProgress(0);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL);
            setImageStoragePath(storageRef.fullPath);
            setUploading(false);
            setUploadProgress(0);
            if (fileInputRef.current) {
              fileInputRef.current.value = ''; // Reset the file input
            }
          });
        }
      );
    } catch (error) {
      console.error("Error processing image:", error);
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen); // Toggle the custom full-screen view state
  };

  const deleteImage = async () => {
    if (!imageStoragePath) return; // Exit if there's no path to delete

    const storage = getStorage();
    const imageRef = firebaseRef(storage, imageStoragePath);

    try {
        await deleteObject(imageRef);
        console.log("Image deleted successfully");
        setImageUrl(''); // Clear the image URL state
        setImageStoragePath(''); // Clear the image storage path state
        setImageTitle('');
        
        onDelete(); // Call the passed deletion callback
        
        // Use Snackbar for success message
        setSnackbarMessage('The image has been deleted.');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
    } catch (error) {
        console.error("Error removing file: ", error);
        // Use Snackbar for error message
        setSnackbarMessage('There was an issue deleting your image.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
    }
  };
  
  const zoomIn = () => setZoomScale(zoomScale * 1.2);
  const zoomOut = () => setZoomScale(zoomScale / 1.2);

  // Update useEffect for fullscreen changes
  useEffect(() => {
    const handleFullScreenChange = () => {
      const isFullScreenNow = !!document.fullscreenElement;
      setIsFullScreen(isFullScreenNow);
      document.body.style.backgroundColor = isFullScreenNow ? "white" : ""; // Set or clear the background color
    }; 

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
        document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  // Snackbar component for displaying messages
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} disabled={uploading} ref={fileInputRef} />
      {uploading && (
        <>
          <p>Uploading... {Math.round(uploadProgress)}%</p>
          <div style={{ width: '100%', backgroundColor: '#ddd' }}>
            <div style={{ height: '20px', width: `${uploadProgress}%`, backgroundColor: 'green' }}></div>
          </div>
        </>
      )}
      {imageUrl && (
        <>
          <div>
            <img ref={imgRef} src={imageUrl} alt="Design" onClick={() => setIsModalVisible(true)} style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', cursor: 'pointer' }} />
            <IconButton onClick={deleteImage} style={{ marginLeft: '10px' }}>
              <DeleteIcon />
            </IconButton>
          </div>
          <label htmlFor="imageTitle" style={{ display: 'block', marginTop: '10px' }}></label>
          <textarea
            id="imageTitle"
            name="imageTitle"
            value={imageTitle}
            onChange={e => setImageTitle(e.target.value)}
            rows="2"
            style={{ width: '100%' }}
            placeholder="Figure."
          ></textarea>
        </>
      )}
      <Dialog 
        open={isModalVisible} 
        onClose={() => setIsModalVisible(false)} 
        fullScreen={isFullScreen} 
        PaperProps={{
          style: {
            backgroundColor: 'white', 
            boxShadow: 'none', 
            maxWidth: isFullScreen ? 'none' : undefined,
            maxHeight: isFullScreen ? 'none' : undefined,
            height: isFullScreen ? '100%' : undefined,
            width: isFullScreen ? '100%' : undefined,
            overflowY: 'auto'
          }
        }} 
      >
        <DialogContent>
          <div style={{ textAlign: 'center' }}>
            <img 
              src={imageUrl} 
              alt="Zoomed Design" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: isFullScreen ? '100vh' : undefined, 
                transform: `scale(${zoomScale})`, 
                transition: 'transform 0.2s ease-out' 
              }} 
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <IconButton onClick={zoomIn}><ZoomInIcon /></IconButton>
            <IconButton onClick={zoomOut} style={{ marginLeft: '10px' }}><ZoomOutIcon /></IconButton>
            <IconButton onClick={toggleFullScreen} style={{ marginLeft: '10px' }}>
              <FullscreenIcon />
            </IconButton>
            {isFullScreen && (
              <IconButton
                onClick={toggleFullScreen}
                style={{
                  position: 'absolute', // Changed from 'fixed' to 'absolute' within the dialog context
                  top: 20,
                  right: 20,
                }}
              >
                <CloseIcon /> 
              </IconButton>
            )}
          </div>
        </DialogContent>
      </Dialog>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );  
};

export default ImageUpload;
