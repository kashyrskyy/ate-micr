// src/components/ChatbotIntegration/ChatbotSelector.tsx

import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, CircularProgress } from '@mui/material';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';
import { SelectChangeEvent } from '@mui/material';

interface Chatbot {
  id: string;
  chatbotId: string;
  title: string;
}

interface ChatbotSelectorProps {
  onChatbotChange: (chatbotId: string | null) => void;
}

const ChatbotSelector: React.FC<ChatbotSelectorProps> = ({ onChatbotChange }) => {
  const { userDetails } = useUser();
  const [chatbots, setChatbots] = useState<Chatbot[]>([]);
  const [selectedChatbotId, setSelectedChatbotId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChatbots = async () => {
      if (!userDetails?.classes) {
        setError('No enrolled classes found.');
        setLoading(false);
        return;
      }

      const db = getFirestore();
      const enrolledCourseIds = Object.keys(userDetails.classes);
      const chatbotsRef = collection(db, 'chatbots');

      try {
        const q = query(chatbotsRef, where('courseId.id', 'in', enrolledCourseIds));
        const querySnapshot = await getDocs(q);

        const fetchedChatbots: Chatbot[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          chatbotId: doc.data().chatbotId,
          title: doc.data().title,
        }));

        setChatbots(fetchedChatbots);

        // Set the first chatbot as default if not already selected
        if (fetchedChatbots.length > 0 && !selectedChatbotId) {
          const firstChatbot = fetchedChatbots[0].chatbotId;
          setSelectedChatbotId(firstChatbot);
          onChatbotChange(firstChatbot);
        } else if (fetchedChatbots.length === 0) {
          setError('No chatbots available for your enrolled courses.');
        }
      } catch (err) {
        console.error('Error fetching chatbots:', err);
        setError('Failed to load chatbots. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchChatbots();
  }, [userDetails, onChatbotChange, selectedChatbotId]);

  const handleChatbotChange = (event: SelectChangeEvent<string>) => {
    const selectedId = event.target.value;
    setSelectedChatbotId(selectedId);
    onChatbotChange(selectedId || null);
  };

  if (loading) {
    return <CircularProgress size={24} />;
  }

  if (error) {
    return (
      <Box>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (!loading && chatbots.length === 0) {
    return (
      <Box>
        <Typography variant="body2" color="textSecondary">
          No chatbots available for your enrolled courses.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minWidth: 200, backgroundColor: '#f5f5f5', borderRadius: 1, p: 1, boxShadow: 1 }}>
      <Typography variant="body1"
        sx={{
            fontFamily: '"Staatliches", sans-serif',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            marginBottom: '8px',
        }}
      >
          Select Chatbot:
      </Typography>
      <Select
        value={selectedChatbotId || ''}
        onChange={handleChatbotChange}
        displayEmpty
        sx={{
            width: '100%',
            backgroundColor: '#f5f5f5',
            borderRadius: 1,
            fontFamily: '"Gabarito", sans-serif',
            fontSize: '1rem',
        }}
      >
        <MenuItem value="" disabled sx={{ fontFamily: '"Gabarito", sans-serif', fontSize: '1rem' }}>
          Select Chatbot
        </MenuItem>
        {chatbots.map((chatbot) => (
          <MenuItem key={chatbot.id} value={chatbot.chatbotId} sx={{ fontFamily: '"Gabarito", sans-serif', fontSize: '1rem' }}>
            {chatbot.title}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ChatbotSelector;