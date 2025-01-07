// src/components/Chatbot/ConversationsTable.tsx
// src/components/Chatbot/ConversationsTable.tsx
import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

// Reuse the same interface here
interface Conversation {
    id: string;
    userId: string;
    chatbotId: string;
    startedAt: string;
}
  
interface ConversationsTableProps {
    conversations: Conversation[];
}  

const ConversationsTable: React.FC<ConversationsTableProps> = ({ conversations }) => {
  if (conversations.length === 0) {
    return (
      <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
        No conversations available to display.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Conversation ID</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Chatbot ID</TableCell>
            <TableCell>Timestamp (Started At)</TableCell>
            <TableCell>API Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {conversations.map((conversation) => (
            <TableRow key={conversation.id}>
              <TableCell>{conversation.id}</TableCell>
              <TableCell>{conversation.userId}</TableCell>
              <TableCell>{conversation.chatbotId}</TableCell>
              <TableCell>{new Date(conversation.startedAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ConversationsTable;