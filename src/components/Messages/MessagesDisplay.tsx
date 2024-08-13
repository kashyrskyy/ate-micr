import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Link, Box } from '@mui/material';
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
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: '#FFF9C4' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', color: '#6D4C41', width: '10%', fontSize: '1.1rem' }}>Posted On</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#6D4C41', width: '30%', fontSize: '1.1rem' }}>Subject</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#6D4C41', width: '50%', whiteSpace: 'pre-wrap', fontSize: '1.1rem' }}>Description</TableCell>
            {userDetails?.isAdmin && <TableCell sx={{ fontWeight: 'bold', color: '#6D4C41', width: '10%' }}>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((message) => (
            <TableRow key={message.id} sx={{ backgroundColor: '#FFFDE7' }}>
              <TableCell>{new Date(message.postedOn.seconds * 1000).toLocaleString()}</TableCell>
              <TableCell sx={{ fontStyle: 'italic' }}>{message.title}</TableCell>
              <TableCell sx={{ whiteSpace: 'pre-wrap' }}>
                {message.description}
                {message.links && message.links.some((link: any) => link.title && link.url) && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Links:</Typography>
                    {message.links.map((link: any, index: number) => (
                      link.title && link.url && (
                        <Box key={index} sx={{ mb: 1 }}>
                          <Typography variant="body2" component="span">🔗 {link.title}: </Typography>
                          <Link href={link.url} target="_blank" rel="noopener">{link.url}</Link>
                        </Box>
                      )
                    ))}
                  </Box>
                )}
              </TableCell>
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
  );
};

export default MessagesDisplay;