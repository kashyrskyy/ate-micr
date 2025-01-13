// src/components/ChatbotConversations/ConversationsTable.tsx
import React from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Typography,
    CircularProgress,
    Paper,
} from '@mui/material';
import { styled } from '@mui/system';

interface Conversation {
    id: string;
    userId: string;
    chatbotId: string;
    startedAt: string;
}

interface ConversationsTableProps {
    conversations: Conversation[];
    onViewHistory: (chatbotId: string, conversationId: string) => void;
    loadingMap: { [key: string]: boolean };
}

// Styled Components
const StyledTableCell = styled(TableCell)({
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#123372', // Customize header background
    fontSize: '1rem',
    textAlign: 'center',
});

const StyledTableRow = styled(TableRow)({
  '& td, & th': {
      padding: '12px 16px',
  },
  '&:nth-of-type(odd)': {
      backgroundColor: '#f9f9f9', // Light background for odd rows
  },
  '&:hover': {
      backgroundColor: '#e0e0e0', // Hover effect
  },
});

const ActionButton = styled(Button)({
    textTransform: 'capitalize',
    borderRadius: '8px',
    padding: '6px 12px',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#123372', // Match dashboard button color
    '&:hover': {
        backgroundColor: '#0d2559', // Slightly darker hover
    },
});

const ConversationsTable: React.FC<ConversationsTableProps> = ({ conversations, onViewHistory, loadingMap }) => {
    if (conversations.length === 0) {
        return (
            <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
                No conversations available to display.
            </Typography>
        );
    }

    return (
        <Box sx={{ mt: 3 }}>
            <TableContainer component={Paper} sx={{ boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Conversation ID</StyledTableCell>
                            <StyledTableCell>User ID</StyledTableCell>
                            <StyledTableCell>Chatbot ID</StyledTableCell>
                            <StyledTableCell>Timestamp (Started At)</StyledTableCell>
                            <StyledTableCell>Q&A Data</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {conversations.length > 0 ? (
                            conversations.map((conversation) => (
                                <StyledTableRow key={conversation.id}>
                                    <TableCell align="center">{conversation.id}</TableCell>
                                    <TableCell align="center">{conversation.userId}</TableCell>
                                    <TableCell align="center">{conversation.chatbotId}</TableCell>
                                    <TableCell align="center">
                                        {conversation.startedAt
                                            ? new Date(conversation.startedAt).toLocaleString()
                                            : 'Invalid date'}
                                    </TableCell>
                                    <TableCell align="center">
                                        <ActionButton
                                            aria-label={`View Q&A data for conversation ${conversation.id}`}
                                            onClick={() => onViewHistory(conversation.chatbotId, conversation.id)}
                                            disabled={loadingMap[conversation.id]}
                                        >
                                            {loadingMap[conversation.id] ? (
                                                <CircularProgress size={20} color="inherit" />
                                            ) : (
                                                'View'
                                            )}
                                        </ActionButton>
                                    </TableCell>
                                </StyledTableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    No conversations available for the selected filters.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ConversationsTable;