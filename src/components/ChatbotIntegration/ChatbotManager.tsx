// src/components/ChatbotIntegration/ChatbotManager.tsx

import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ChatbotWrapper from './ChatbotWrapper';
import ChatbotSelector from './ChatbotSelector';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

const ChatbotManager: React.FC = () => {
  const [selectedChatbotId, setSelectedChatbotId] = useState<string | null>(null);
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);

  const handleChatbotChange = (chatbotId: string | null) => {
    if (selectedChatbotId !== chatbotId) {
      setSelectedChatbotId(chatbotId);
    }
  };

  const toggleSelectorVisibility = () => {
    setIsSelectorVisible((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1100, // Ensure it's always on top
        width: isSelectorVisible ? '300px' : '56px', // Expand width when visible
        backgroundColor: isSelectorVisible ? '#f9f9f9' : 'transparent',
        padding: isSelectorVisible ? '16px' : '0px',
        borderRadius: '12px',
        boxShadow: isSelectorVisible ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
        overflow: 'hidden',
      }}
    >
        {/* Close Icon in Top Right */}
        {isSelectorVisible && (
            <IconButton
            onClick={toggleSelectorVisibility}
            sx={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                backgroundColor: '#f5f5f5',
                color: '#000',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                fontFamily: '"Staatliches", sans-serif',
                fontSize: '1.25rem',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                backgroundColor: '#e0e0e0',
                },
            }}
            >
                <CloseIcon />
            </IconButton>
        )}

        {/* Chat Icon as a Toggle when not visible */}
        {!isSelectorVisible && (
            <IconButton
            onClick={toggleSelectorVisibility}
            sx={{
                backgroundColor: '#0B53C0',
                color: '#fff',
                borderRadius: '50%',
                width: '56px',
                height: '56px',
                transition: 'all 0.3s ease',
                '&:hover': {
                backgroundColor: '#36543e',
                },
            }}
            >
            <ChatIcon />
            </IconButton>
        )}

        {/* Chatbot Selector and Wrapper */}
        {isSelectorVisible && (
            <>
            <ChatbotSelector onChatbotChange={handleChatbotChange} />
            {selectedChatbotId && <ChatbotWrapper chatbotId={selectedChatbotId} />}
            </>
        )}
    </Box>
  );
};

export default ChatbotManager;