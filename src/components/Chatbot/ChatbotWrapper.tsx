import React, { useState } from 'react';
import { ChatbotInterface } from 'rag-chatbot-interface-ifi';
import { Box, Typography } from '@mui/material';
import ErrorBoundary from './ErrorBoundary';

interface ChatbotWrapperProps {
  chatbotId: string;
}

const ChatbotWrapper: React.FC<ChatbotWrapperProps> = ({ chatbotId }) => {
  //This package allows for us to retrieve Conversation ID as when a conversation starts
  const [conversationId, setConversationId] = useState<string | null>(null);
  //Chatbot interface will call handleConversationStart when a new conversation is started. 
  //Provides current Conversation ID which can be saved within NexLAB
  const handleConversationStart = (newConversationId: string) => {
    console.log("Conversation started with ID:", newConversationId);
    setConversationId(newConversationId);
  };

  if (!chatbotId) {
    console.warn('Chatbot ID is missing.');
    return null;
  }

  {console.log('Rendering ChatbotInterface with ID:', chatbotId)}

  return (
    <Box sx={{ position: 'fixed', bottom: 0, right: 0, m: 2, zIndex: 1000 }}>
      <ErrorBoundary>
        <ChatbotInterface 
          chatbotId={chatbotId} 
          onConversationStart={handleConversationStart}
        />
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">
            Current Conversation ID: {conversationId || "No conversation started yet."}
          </Typography>
        </Box>
      </ErrorBoundary>
    </Box>
  );
};

export default ChatbotWrapper;