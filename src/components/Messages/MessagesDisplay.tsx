// src/components/Messages/MessagesDisplay.tsx
import React, { useState } from 'react';
import { Card, Typography, Link, Box, IconButton, Grid, Button, Paper, Chip } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteMessage from './DeleteMessage';

import PinMessage from './PinMessage';
import PushPinIcon from '@mui/icons-material/PushPin';

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface Message {
  id: string;
  postedOn: { seconds: number };
  title: string;
  description: string;
  links: { title: string; url: string }[];
  course: string; // Single course property
  isPinned?: boolean;
}

interface Props {
  messages: Message[];
  userDetails: any;
  navigate: Function;
  handleDeleteMessage: (id: string) => void;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const MessagesDisplay: React.FC<Props> = ({ messages, userDetails, navigate, handleDeleteMessage, setMessages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const messagesPerPage = 3;

  const filteredMessages = messages.filter(message => 
    userDetails?.class?.includes(message.course) || message.course === 'Public-Source'
  );  

  const pinnedMessages = filteredMessages.filter(message => message.isPinned);
  const unpinnedMessages = filteredMessages.filter(message => !message.isPinned);  

  const indexOfLastMessage = (currentPage + 1) * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = unpinnedMessages.slice(indexOfFirstMessage, indexOfLastMessage);

  const totalPages = Math.ceil(unpinnedMessages.length / messagesPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Box>
      {pinnedMessages.length > 0 && (
        <Paper elevation={3} sx={{ mb: 3, p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PushPinIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Pinned
            </Typography>
          </Box>
          {pinnedMessages.map((message) => (
            <Card key={message.id} sx={{ mb: 2, backgroundColor: '#FFFDE7', padding: '20px' }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${message.id}-content`}
                  id={`panel-${message.id}-header`}
                >
                  <Grid container justifyContent="space-between" alignItems="flex-start">
                    <Grid item>
                      <Chip 
                        label={message.course}
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 1, borderRadius: '16px' }}
                      />
                      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        Posted On: {new Date(message.postedOn.seconds * 1000).toLocaleString()}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                        Subject: {message.title}
                      </Typography>
                    </Grid>
                    {userDetails?.isAdmin && (
                      <Grid item>
                        <PinMessage message={message} messages={messages} setMessages={setMessages} />
                        <IconButton onClick={() => navigate(`/edit-message/${message.id}`)} sx={{ marginRight: 1 }}>
                          <EditIcon />
                        </IconButton>
                        <DeleteMessage messageId={message.id} onDelete={handleDeleteMessage} />
                      </Grid>
                    )}
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '4px', backgroundColor: '#fafafa', marginBottom: '16px' }}>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                      {message.description}
                    </Typography>
                    {message.links && message.links.some((link) => link.title && link.url) && (
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Links:</Typography>
                        {message.links.map((link, index) => (
                          link.title && link.url && (
                            <Box key={index} sx={{ mt: 1 }}>
                              <Typography variant="body2" component="span">🔗 {link.title}: </Typography>
                              <Link href={link.url} target="_blank" rel="noopener">{link.url}</Link>
                            </Box>
                          )
                        ))}
                      </Box>
                    )}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Card>
          ))}
        </Paper>
      )}

      {currentMessages.map((message) => (
        <Card key={message.id} sx={{ mb: 2, backgroundColor: '#FFFDE7', padding: '20px' }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${message.id}-content`}
              id={`panel-${message.id}-header`}
            >
              <Grid container justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                  <Chip 
                    label={message.course}
                    color="primary"
                    variant="outlined"
                    sx={{ mb: 1, borderRadius: '16px' }}
                  />
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    Posted On: {new Date(message.postedOn.seconds * 1000).toLocaleString()}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                    Subject: {message.title}
                  </Typography>
                </Grid>
                {userDetails?.isAdmin && (
                  <Grid item>
                    <PinMessage message={message} messages={messages} setMessages={setMessages} />
                    <IconButton onClick={() => navigate(`/edit-message/${message.id}`)} sx={{ marginRight: 1 }}>
                      <EditIcon />
                    </IconButton>
                    <DeleteMessage messageId={message.id} onDelete={handleDeleteMessage} />
                  </Grid>
                )}
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '4px', backgroundColor: '#fafafa', marginBottom: '16px' }}>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                  {message.description}
                </Typography>
                {message.links && message.links.some((link) => link.title && link.url) && (
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Links:</Typography>
                    {message.links.map((link, index) => (
                      link.title && link.url && (
                        <Box key={index} sx={{ mt: 1 }}>
                          <Typography variant="body2" component="span">🔗 {link.title}: </Typography>
                          <Link href={link.url} target="_blank" rel="noopener">{link.url}</Link>
                        </Box>
                      )
                    ))}
                  </Box>
                )}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Card>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          sx={{ mr: 1 }}
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={currentPage >= totalPages - 1}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default MessagesDisplay;