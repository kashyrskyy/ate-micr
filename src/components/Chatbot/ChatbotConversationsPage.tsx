// src/components/Chatbot/ChatbotConversationsPage.tsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ConversationsTable from './ConversationsTable';

// Define the interface for conversations
interface Conversation {
    id: string;
    userId: string;
    chatbotId: string;
    startedAt: string;
}

const ChatbotConversationsPage: React.FC = () => {
  const db = getFirestore();
  const navigate = useNavigate();
  
  // Use the Conversation interface for type-checking
  const [conversations, setConversations] = useState<Conversation[]>([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'conversations'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Conversation[];
        setConversations(data);
      } catch (error) {
        console.error('Error fetching chatbot conversations:', error);
        setError('Failed to load conversations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchConversations();
  }, [db]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      {/* Back to Home Button */}
      <Button
        variant="text"
        onClick={() => navigate('/')}
        sx={{ mb: 2 }}
      >
        &larr; Home Page
      </Button>

      <Typography variant="h4" gutterBottom>
        Chatbot Conversations
      </Typography>

      {/* Render the ConversationsTable */}
      <ConversationsTable conversations={conversations} />
    </Box>
  );
};

export default ChatbotConversationsPage;