import React, { useState } from 'react';
import { ChatbotInterface } from 'rag-chatbot-interface-ifi';
import { Box, Typography } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore'; // Firestore functions
import { db } from '../../config/firestore'; // Import Firestore instance
import ErrorBoundary from './ErrorBoundary';
import { useUser } from '../../contexts/UserContext'; // Import UserContext

interface ChatbotWrapperProps {
  chatbotId: string;
}

const ChatbotWrapper: React.FC<ChatbotWrapperProps> = ({ chatbotId }) => {
  const { userDetails } = useUser(); // Access userDetails from UserContext
  //This package allows for us to retrieve Conversation ID as when a conversation starts
  const [conversationId, setConversationId] = useState<string | null>(null);

  //Chatbot interface will call handleConversationStart when a new conversation is started. 
  //Provides current Conversation ID which can be saved within NexLAB
  const handleConversationStart = async (newConversationId: string) => {
    console.log("Chatbot started with ID:", chatbotId);
    console.log("Conversation started with ID:", newConversationId);
    setConversationId(newConversationId);

    // Ensure userDetails and userDetails.uid are available
    if (!userDetails || !userDetails.uid) {
      console.warn('User details or UID are missing. Cannot save conversation.');
      return;
    }

    // Save conversation details in Firestore
    try {
      await setDoc(doc(db, 'conversations', newConversationId), {
        conversationId: newConversationId,
        chatbotId, // Save chatbot ID
        userId: userDetails.uid, // Use UID from UserContext
        startedAt: new Date().toISOString(),
      });
      console.log('Conversation data saved to Firestore');
    } catch (error) {
      console.error('Error saving conversation data:', error);
    }
  };

  if (!chatbotId) {
    console.warn('Chatbot ID is missing.');
    return null;
  }

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