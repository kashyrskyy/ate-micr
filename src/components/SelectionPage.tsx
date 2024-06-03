// src/components/SelectionPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardActionArea, CardContent, Grid, Chip, Tooltip, Snackbar, Alert, SnackbarCloseReason, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { useUser } from '../contexts/UserContext';
import Logout from './Logout';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteMessage from './Messages/DeleteMessage';

const SelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { userDetails } = useUser();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [copied, setCopied] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchMessages = async () => {
      const q = query(collection(db, 'messages'), orderBy('postedOn', 'desc'));
      const querySnapshot = await getDocs(q);
      const messagesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(messagesList);
    };
    fetchMessages();
  }, [db]);

  const handleCopyUserId = () => {
    if (userDetails?.uid) {
      navigator.clipboard.writeText(userDetails.uid)
        .then(() => {
          setOpenSnackbar(true);
          setCopied(true);
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
        });
    } else {
      console.error('User details are null or undefined');
    }
  };

  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleDeleteMessage = (id: string) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Home Page / ATE 2.0 
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {userDetails?.isAdmin && (
            <Chip 
              label="Admin" 
              variant="outlined" 
              sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#ffcdd2', color: '#c62828', mr: 1 }} 
            />
          )}
          {userDetails && (
            <Tooltip title={copied ? "Copied!" : "Click to Copy"} enterDelay={300} leaveDelay={200}>
              <Chip
                label={`User ID: ${userDetails.uid}`}
                variant="outlined"
                onClick={handleCopyUserId}
                sx={{
                  borderRadius: '15px',
                  fontWeight: 'bold',
                  background: '#e0f2f1',
                  color: '#00695c',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  mr: 2,
                }}
              />
            </Tooltip>
          )}
          <Logout />
        </Box>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
              Educator Messages
            </Typography>
          </Box>
          {userDetails?.isAdmin && (
            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/add-message')}
                sx={{
                  backgroundColor: '#FFF9C4',
                  color: '#6D4C41',
                  '&:hover': {
                    backgroundColor: '#FFF176',
                  },
                }}
              >
                + Add Message
              </Button>
            </Box>
          )}
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: '#FFF9C4' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', color: '#6D4C41', width: '10%' }}>Posted On</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#6D4C41', width: '30%' }}>Subject</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#6D4C41', width: '50%', whiteSpace: 'pre-wrap' }}>Description</TableCell>
                  {userDetails?.isAdmin && <TableCell sx={{ fontWeight: 'bold', color: '#6D4C41', width: '10%' }}>Actions</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {messages.map((message) => (
                  <TableRow key={message.id} sx={{ backgroundColor: '#FFFDE7' }}>
                    <TableCell>{new Date(message.postedOn.seconds * 1000).toLocaleString()}</TableCell>
                    <TableCell sx={{ fontStyle: 'italic' }}>{message.title}</TableCell>
                    <TableCell sx={{ whiteSpace: 'pre-wrap' }}>{message.description}</TableCell>
                    {userDetails?.isAdmin && (
                      <TableCell>
                        <IconButton onClick={() => navigate(`/edit-message/${message.id}`)}>
                          <EditIcon />
                        </IconButton>
                        <DeleteMessage messageId={message.id} onDelete={handleDeleteMessage} />
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="h6" align="left" component="h2" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} gutterBottom>
            Navigation
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <CardActionArea onClick={() => navigate('/laboratory-notebooks')}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      My Laboratory Notebook
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardActionArea onClick={() => navigate('/supplemental-materials')}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Course Materials
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          User ID copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SelectionPage;