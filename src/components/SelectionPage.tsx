// src/components/SelectionPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Link, Card, CardActionArea, CardContent, Grid, Chip, Tooltip, Snackbar, Alert, SnackbarCloseReason, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { useUser } from '../contexts/UserContext';
import Logout from './Logout';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import MessagesDisplay from './Messages/MessagesDisplay';

const SelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { userDetails, isSuperAdmin } = useUser();
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
          {isSuperAdmin && (
            <Chip 
              label="Super-Admin" 
              variant="outlined" 
              sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#ffcdd2', color: '#c62828', mr: 1 }} 
            />
          )}
          {userDetails?.isAdmin && !isSuperAdmin && (
            <Chip 
              label="Educator" 
              variant="outlined" 
              sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#ffcdd2', color: '#c62828', mr: 1 }} 
            />
          )}
          {!userDetails?.isAdmin && (
            <Chip 
              label="Student" 
              variant="outlined" 
              sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#bbdefb', color: '#1e88e5', mr: 1 }} 
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
              Messages
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
          <MessagesDisplay
            messages={messages}
            userDetails={userDetails}
            navigate={navigate}
            handleDeleteMessage={handleDeleteMessage}
            setMessages={setMessages}
          />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h6" align="left" component="h2" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} gutterBottom>
                General Menu
              </Typography>
              <Card>
                <CardActionArea onClick={() => navigate('/my-profile')}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      My Account
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                {userDetails && !userDetails.isAdmin && (!userDetails.class || !userDetails.class.some(course => course !== "Public-Source")) ? (
                  <Tooltip title="The Laboratory Notebook is accessible to users enrolled in an academic course. Please enroll in a course via 'My Account' by following the instructions provided by your academic instructor.">
                    <span>
                      <CardActionArea disabled>
                        <CardContent>
                          <Typography variant="h5" component="div" sx={{ color: '#9e9e9e', opacity: 0.5 }}>
                            My Laboratory Notebook
                            <span style={{ marginLeft: 8 }}>🔒</span>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </span>
                  </Tooltip>
                ) : (
                  <CardActionArea onClick={() => navigate('/laboratory-notebooks')}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        My Laboratory Notebook
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                )}
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
            
            {userDetails?.isAdmin && (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6" align="left" component="h2" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} gutterBottom>
                    + Educator
                  </Typography>
                  <Card>
                    <CardActionArea onClick={() => navigate('/course-management')}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          Course Management
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            )}

            {isSuperAdmin && (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6" align="left" component="h2" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} gutterBottom>
                    + Super-Admin
                  </Typography>
                  <Card>
                    <CardActionArea onClick={() => navigate('/user-management')}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          User Management
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardActionArea onClick={() => navigate('/educator-requests')}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          Educator Requests
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardActionArea onClick={() => navigate('/course-requests')}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          Course Requests
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            )}
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