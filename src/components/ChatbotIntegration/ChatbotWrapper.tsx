// src/components/ChatbotIntegration/ChatbotWrapper.tsx

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { ChatbotInterface } from 'rag-chatbot-interface-ifi';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firestore';
import ErrorBoundary from './ErrorBoundary';
import { useUser } from '../../contexts/UserContext';

interface ChatbotWrapperProps {
  chatbotId: string;
}

const ChatbotWrapper: React.FC<ChatbotWrapperProps> = ({ chatbotId }) => {
  const { userDetails } = useUser();
  const [conversationId, setConversationId] = useState<string | null>(null);

  //Chatbot interface will call handleConversationStart when a new conversation is started. 
  //Provides current Conversation ID which can be saved within NexLAB
  const handleConversationStart = async (newConversationId: string) => {
    console.log("Chatbot started with ID:", chatbotId);
    console.log("Conversation started with ID:", newConversationId);
    setConversationId(newConversationId);

    if (userDetails?.uid) {
      try {
        await setDoc(doc(db, 'conversations', newConversationId), {
          conversationId: newConversationId,
          chatbotId,
          userId: userDetails.uid,
          startedAt: new Date().toISOString(),
        });
        console.log('Conversation saved successfully');
      } catch (error) {
        console.error('Failed to save conversation:', error);
      }
    }
  };

  // Cleanup logic when chatbotId changes
  useEffect(() => {
    setConversationId(null); // Reset conversation ID on chatbot change
  }, [chatbotId]);

  return (
    <Box sx={{ mt: 2 }}>
      <ErrorBoundary>
        <ChatbotInterface chatbotId={chatbotId} onConversationStart={handleConversationStart} />
        {conversationId ? (
          <Box sx={{ mt: 1 }}>
            <Typography 
              variant="body2"           
              sx={{
                fontFamily: '"Staatliches", sans-serif',
                fontWeight: 'bold',
                fontSize: '1.25rem',
              }}
            >
              Current Conversation ID:
            </Typography>
            <Typography 
              variant="body2" 
              sx={{
                fontFamily: '"Gabarito", sans-serif',
                fontSize: '1rem',
                wordWrap: 'break-word',
              }}
            >
              {conversationId}
            </Typography>
          </Box>
        ) : (
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2" color="textSecondary" sx={{ fontFamily: '"Gabarito", sans-serif', fontSize: '1rem' }}>
              Chatbot not initialized yet.
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ fontFamily: '"Gabarito", sans-serif', fontSize: '1rem' }}>
              Start a conversation first.
            </Typography>
          </Box>
        )}
      </ErrorBoundary>
    </Box>
  );
};

export default ChatbotWrapper;