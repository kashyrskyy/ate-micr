// src/components/ChatbotConversations/ConversationHistoryModal.tsx
import React from 'react';
import {
    Modal,
    Box,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    CircularProgress,
    IconButton,
    Tooltip,
} from '@mui/material';
import { styled } from '@mui/system';

import DownloadIcon from '@mui/icons-material/Download'; // Import the download icon
import { exportToCsv } from '../../utils/exportToCsv'; // Import the utility

const StyledModalBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    maxHeight: '80vh',
    overflowY: 'auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
    padding: '20px',
});

const StyledHeader = styled(Box)({
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

interface Message {
    question: string;
    answer: string;
    timestamp: string;
}

interface ConversationHistoryModalProps {
    open: boolean;
    onClose: () => void;
    conversationHistory: Message[];
    conversationId: string;
    conversationHistoryError: string | null;
}

const ConversationHistoryModal: React.FC<ConversationHistoryModalProps> = ({
    open,
    onClose,
    conversationHistory,
    conversationId,
    conversationHistoryError,
}) => {
    const handleDownloadCsv = () => {
        const filename = `${conversationId}.csv`;
        exportToCsv(filename, conversationHistory);
    };

    return (
        <Modal open={open} onClose={onClose}>
            <StyledModalBox>
                <StyledHeader>
                    <Typography variant="h6">
                        Conversation History for {conversationId}
                    </Typography>
                    <Tooltip title="Download CSV">
                        <IconButton onClick={handleDownloadCsv} aria-label="Download as CSV">
                            <DownloadIcon />
                        </IconButton>
                    </Tooltip>
                </StyledHeader>

                {conversationHistoryError && (
                    <Typography color="error" sx={{ marginBottom: '20px' }}>
                        {conversationHistoryError}
                    </Typography>
                )}

                {conversationHistory.length === 0 ? (
                    <Typography>No messages found in this conversation.</Typography>
                ) : (
                    <List>
                        {conversationHistory.map((message, index) => (
                            <ListItem key={index} sx={{ padding: '10px 0' }}>
                                <ListItemText
                                    primary={`Q: ${message.question}`}
                                    secondary={`A: ${message.answer} (${new Date(
                                        message.timestamp
                                    ).toLocaleString()})`}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}

                <Button
                    variant="contained"
                    onClick={onClose}
                    style={{
                        marginTop: '20px',
                        backgroundColor: '#000',
                        color: '#fff',
                    }}
                >
                    Close
                </Button>
            </StyledModalBox>
        </Modal>
    );
};

export default ConversationHistoryModal;