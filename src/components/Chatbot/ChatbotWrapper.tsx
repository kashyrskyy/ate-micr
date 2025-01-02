import React from 'react';
import { ChatbotInterface } from 'chatbot-interface-ifi';
import { Box, Typography } from '@mui/material';
import ErrorBoundary from './ErrorBoundary';

interface ChatbotWrapperProps {
  chatbotId: string;
}

const ChatbotWrapper: React.FC<ChatbotWrapperProps> = ({ chatbotId }) => {
  if (!chatbotId) {
    console.warn('Chatbot ID is missing.');
    return null;
  }

  {console.log('Rendering ChatbotInterface with ID:', chatbotId)}

  return (
    <Box sx={{ position: 'fixed', bottom: 0, right: 0, m: 2, zIndex: 1000 }}>
      <ErrorBoundary>
        <ChatbotInterface chatbotId={chatbotId} />
      </ErrorBoundary>
    </Box>
  );
};

export default ChatbotWrapper;