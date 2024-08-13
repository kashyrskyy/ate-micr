import React from 'react';
import { Card, Typography, Link, Box, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteMessage from './DeleteMessage';

interface Message {
  id: string;
  postedOn: { seconds: number };
  title: string;
  description: string;
  links: { title: string; url: string }[];
}

interface Props {
  messages: Message[];
  userDetails: any;
  navigate: Function;
  handleDeleteMessage: (id: string) => void;
}

const MessagesDisplay: React.FC<Props> = ({ messages, userDetails, navigate, handleDeleteMessage }) => {
  return (
    <Box>
      {messages.map((message) => (
        <Card key={message.id} sx={{ mb: 2, backgroundColor: '#FFFDE7', padding: '20px' }}>
          <Grid container justifyContent="space-between" alignItems="flex-start">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Posted On: {new Date(message.postedOn.seconds * 1000).toLocaleString()}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                Subject: {message.title}
              </Typography>
            </Grid>
            {userDetails?.isAdmin && (
              <Grid item>
                <IconButton onClick={() => navigate(`/edit-message/${message.id}`)} sx={{ marginRight: 1 }}>
                  <EditIcon />
                </IconButton>
                <DeleteMessage messageId={message.id} onDelete={handleDeleteMessage} />
              </Grid>
            )}
          </Grid>
          <Box sx={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '4px', backgroundColor: '#fafafa', marginBottom: '16px' }}>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              {message.description}
            </Typography>
            {message.links && message.links.some((link: any) => link.title && link.url) && (
              <Box sx={{ mt: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Links:</Typography>
                {message.links.map((link: any, index: number) => (
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
        </Card>
      ))}
    </Box>
  );
};

export default MessagesDisplay;