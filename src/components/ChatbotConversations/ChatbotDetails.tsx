// src/components/ChatbotConversations/ChatbotDetails.tsx
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Box, Typography, CircularProgress } from '@mui/material';
import { getFirestore } from 'firebase/firestore';

interface ChatbotDetailsProps {
    chatbotId: string;
}

const ChatbotDetails: React.FC<ChatbotDetailsProps> = ({ chatbotId }) => {
    const db = getFirestore();
    const [chatbotDetails, setChatbotDetails] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { title = 'N/A', courseId = {}, createdBy = 'Unknown', timestamp } = chatbotDetails || {};
    const courseTitle = courseId?.title || 'N/A';

    useEffect(() => {
        const fetchChatbotDetails = async () => {
            setLoading(true);
            setError(null);

            try {
                // Query the chatbots collection by the chatbotId field
                const chatbotQuery = query(
                    collection(db, 'chatbots'),
                    where('chatbotId', '==', chatbotId)
                );
                const querySnapshot = await getDocs(chatbotQuery);

                if (!querySnapshot.empty) {
                    // Assuming only one document matches the chatbotId
                    setChatbotDetails(querySnapshot.docs[0].data());
                } else {
                    setError('Chatbot details not found.');
                }
            } catch (err) {
                console.error('Error fetching chatbot details:', err);
                setError('Failed to fetch chatbot details.');
            } finally {
                setLoading(false);
            }
        };

        if (chatbotId !== 'All') {
            fetchChatbotDetails();
        }
    }, [db, chatbotId]);

    if (loading) {
        return (
            <Box sx={{ mt: 3 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography variant="body1" color="error" sx={{ mt: 3 }}>
                {error}
            </Typography>
        );
    }

    if (!chatbotDetails) {
        return null;
    }

    return (
        <Box sx={{ mt: 3, p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h6">Chatbot Details</Typography>
            <Typography variant="body1">
                <strong>Title:</strong> {title}
            </Typography>
            <Typography variant="body1">
                <strong>Course:</strong> {courseTitle}
            </Typography>
            <Typography variant="body1">
                <strong>Created By:</strong> {createdBy}
            </Typography>
            <Typography variant="body1">
                <strong>Created At:</strong> {timestamp ? new Date(timestamp).toLocaleString() : 'N/A'}
            </Typography>
        </Box>
    );
};

export default ChatbotDetails;