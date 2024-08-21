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
    <Box className="messages-display-container"> {/* Naming the main container box */}
      {pinnedMessages.length > 0 && (
        <Paper elevation={3} sx={{ mb: 3, p: 2 }}>
          <Box className="pinned-section">
            <PushPinIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" className="pinned-title">
              Pinned
            </Typography>
          </Box>
          {pinnedMessages.map((message) => (
            <Card key={message.id} className="messages-card">
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
                        className="message-chip"
                      />
                      <Typography variant="subtitle2" className="message-posted-on">
                        Posted On: {new Date(message.postedOn.seconds * 1000).toLocaleString()}
                      </Typography>
                      <Typography variant="h6" className="message-title">
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
                    <Typography variant="body1" className="message-description">
                      {message.description}
                    </Typography>
                    {message.links && message.links.some((link) => link.title && link.url) && (
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="subtitle2" className="message-links-title">Links:</Typography>
                        {message.links.map((link, index) => (
                          link.title && link.url && (
                            <Box key={index} sx={{ mt: 1 }}>
                              <Typography variant="body2" component="span" className="message-link">🔗 {link.title}: </Typography>
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
        <Card key={message.id} className="messages-card">
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
                    className="message-chip"
                  />
                  <Typography variant="subtitle2" className="message-posted-on">
                    Posted On: {new Date(message.postedOn.seconds * 1000).toLocaleString()}
                  </Typography>
                  <Typography variant="h6" className="message-title">
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
                <Typography variant="body1" className="message-description">
                  {message.description}
                </Typography>
                {message.links && message.links.some((link) => link.title && link.url) && (
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="subtitle2" className="message-links-title">Links:</Typography>
                    {message.links.map((link, index) => (
                      link.title && link.url && (
                        <Box key={index} sx={{ mt: 1 }}>
                          <Typography variant="body2" component="span" className="message-link">🔗 {link.title}: </Typography>
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

      <Box className="pagination-container"> {/* Naming the pagination container box */}
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="pagination-button"
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={currentPage >= totalPages - 1}
          className="pagination-button"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default MessagesDisplay;