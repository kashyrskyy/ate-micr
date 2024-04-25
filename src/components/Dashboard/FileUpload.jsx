// FileUpload.jsx
import React, { useState, useRef, useEffect } from 'react';
import { getStorage, ref as firebaseRef, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Tooltip from '@mui/material/Tooltip';

const FileUpload = ({ path, initialFiles = [], onFilesChange }) => {
    const [files, setFiles] = useState(initialFiles);

    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const [editStates, setEditStates] = useState({}); // This will hold editing states for each file
    
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');

    const fileInputRef = useRef(null);

    useEffect(() => {
        console.log("Initial files received:", initialFiles);
        setFiles(initialFiles);
    }, [initialFiles]);

    useEffect(() => {
        return () => {
            setEditStates({});  // Reset editing states when the component unmounts
        };
    }, []);    

    // Replace internal setFiles calls with onFilesChange from props
    const updateFiles = (newFiles) => {
        console.log('Updating files with', newFiles);
        onFilesChange(newFiles);
        setFiles(newFiles); // Optional: maintain local state if necessary for display
    };
    
    const handleFileChange = async (event) => {
        const fileList = Array.from(event.target.files);

        const filteredFiles = fileList.filter(file => {
            if (file.size > 5242880) {  // 5 MB in bytes
                setSnackbarMessage("File size should not exceed 5 MB");
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                return false;
            }
            return true;
        });

        setUploading(true);

        const uploadPromises = filteredFiles.map(file => {
            const uniqueIdentifier = new Date().getTime();
            const modifiedFileName = `${uniqueIdentifier}-${file.name}`;
            const storage = getStorage();
            const storageRef = firebaseRef(storage, `${path}/${modifiedFileName}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            return new Promise((resolve, reject) => {
                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setUploadProgress(progress);
                    },
                    (error) => {
                        console.error("Upload failed:", error);
                        reject(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            resolve({ id: uniqueIdentifier, url: downloadURL, name: file.name, path: storageRef.fullPath });
                        });
                    }
                );
            });
        });

        Promise.all(uploadPromises).then(newFiles => {
            updateFiles(prev => [...prev, ...newFiles]); // Changed from setFiles to updateFiles
            setSnackbarMessage('Files uploaded successfully.');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            setUploading(false);
            setUploadProgress(0);
            fileInputRef.current.value = ''; // Clear the input after upload
        }).catch(error => {
            console.error("Error uploading files: ", error);
            setSnackbarMessage('Failed to upload files.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            setUploading(false);
            setUploadProgress(0);
        });
    };

    const deleteFile = async (id) => {
        const fileToDelete = files.find(file => file.id === id);
        if (!fileToDelete) return;

        const storage = getStorage();
        const fileRef = firebaseRef(storage, fileToDelete.path);

        try {
            await deleteObject(fileRef);
            updateFiles(prev => prev.filter(file => file.id !== id)); // Changed from setFiles to updateFiles
            setSnackbarMessage('File deleted successfully.');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
        } catch (error) {
            console.error("Error removing file:", error);
            setSnackbarMessage('Failed to delete file.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };    

    const handleEditClick = (fileId) => {
        setEditStates((prevEditStates) => ({
            ...prevEditStates,
            [fileId]: files.find((file) => file.id === fileId)?.name || '', // Ensure fallback to empty string if file is not found
        }));
        console.log("editStates after handleEditClick:", editStates);
    };

    // When you're done editing and want to save the new name
    const handleSaveClick = (fileId) => {
        const newFiles = files.map(file => {
            if (file.id === fileId && editStates[fileId] !== undefined) {
                return { ...file, name: editStates[fileId] }; // Only update the name of the file being edited
            }
            return file;
        });
        
        setFiles(newFiles); // Update the state with the new files array
        onFilesChange(newFiles); // Propagate changes up to the parent component

        setEditStates(prev => {
            const newState = { ...prev };
            delete newState[fileId]; // Remove the edit state for this fileId
            return newState;
        });
        setSnackbarMessage('File name updated successfully.');
        setSnackbarSeverity('info');
        setSnackbarOpen(true);
    };

    // Update the name in the editStates when typing
    const handleNameChange = (fileId, newName) => {
        setEditStates(prev => ({
            ...prev,
            [fileId]: newName // Update the edit state for this specific fileId
        }));
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbarOpen(false);
    };

    return (
        <div>
            <Tooltip title="Upload Files">
                <Button
                    variant="outlined"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                    sx={{
                        m: 1, // Adds margin around the button
                        pl: 2, // Adds padding inside the button, on the left of the icon and text
                        pr: 2, // Adds padding inside the button, on the right of the icon and text
                    }}
                >
                    Upload File(s)
                    <input type="file" hidden multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" onChange={handleFileChange} disabled={uploading} ref={fileInputRef} />
                </Button>
            </Tooltip>
            {uploading && (
                <div>
                    <p>Uploading... {Math.round(uploadProgress)}%</p>
                </div>
            )}
            <List>
                {files.map((file) => (
                    <ListItem key={file.id} component="div">
                        <ListItemIcon>
                            <InsertDriveFileIcon />
                        </ListItemIcon>
                        {typeof editStates[file.id] === 'string' ? (
                            <TextField
                                variant="outlined"
                                size="small"
                                value={editStates[file.id]}
                                onChange={(e) => handleNameChange(file.id, e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSaveClick(file.id)}
                                fullWidth
                            />
                        ) : (
                            <ListItemText primary={file.name} secondary={<a href={file.url} target="_blank" rel="noopener noreferrer">Download</a>} />
                        )}
                        {typeof editStates[file.id] === 'string' ? (
                            <IconButton onClick={() => handleSaveClick(file.id)} edge="end" aria-label="save">
                                <SaveIcon />
                            </IconButton>
                        ) : (
                            <>
                                <IconButton onClick={() => handleEditClick(file.id)} edge="end" aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => deleteFile(file.id)} edge="end" aria-label="delete">     
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};
                        
export default FileUpload;