// FileUpload.jsx
import React, { useState, useRef } from 'react';
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

const FileUpload = ({ path }) => {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [editState, setEditState] = useState({ id: null, name: "" });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');

    const fileInputRef = useRef(null);

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
            setFiles(prev => [...prev, ...newFiles]);
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
            setFiles(prev => prev.filter(file => file.id !== id));
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
        const file = files.find(f => f.id === fileId);
        if (file) {
            setEditState({ id: file.id, name: file.name });
        }
    };

    const handleSaveClick = (fileId) => {
        const updatedFiles = files.map(file => {
            if (file.id === fileId) {
                return { ...file, name: editState.name };
            }
            return file;
        });
        setFiles(updatedFiles);
        setEditState({ id: null, name: "" });
        setSnackbarMessage('File name updated successfully.');
        setSnackbarSeverity('info');
        setSnackbarOpen(true);
    };

    const handleNameChange = (event) => {
        setEditState(prev => ({ ...prev, name: event.target.value }));
    };

    const handleKeyPress = (event, fileId) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSaveClick(fileId);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbarOpen(false);
    };

    return (
        <div>
            <h5>Files</h5>
            <Button variant="outlined" component="label">
                Upload File(s)
                <input type="file" hidden multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" onChange={handleFileChange} disabled={uploading} ref={fileInputRef} />
            </Button>
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
                        {editState.id === file.id ? (
                            <TextField
                                variant="outlined"
                                size="small"
                                value={editState.name}
                                onChange={handleNameChange}
                                onKeyPress={(e) => handleKeyPress(e, file.id)}
                                fullWidth
                            />
                        ) : (
                            <ListItemText primary={file.name} secondary={<a href={file.url} target="_blank" rel="noopener noreferrer">Download</a>} />
                        )}
                        {editState.id === file.id ? (
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