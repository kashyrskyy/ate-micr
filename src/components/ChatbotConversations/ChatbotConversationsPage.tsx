// src/components/ChatbotConversations/ChatbotConversationsPage.tsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ConversationsTable from './ConversationsTable';
import axios from 'axios';
import ConversationHistoryModal from './ConversationHistoryModal';

interface Conversation {
    id: string;
    userId: string;
    chatbotId: string;
    startedAt: string;
}

const ChatbotConversationsPage: React.FC = () => {
    const db = getFirestore();
    const navigate = useNavigate();
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // API Data
    const [conversationHistory, setConversationHistory] = useState<any[]>([]);
    const [apiError, setApiError] = useState<string | null>(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedConversation, setSelectedConversation] = useState<{
        chatbotId: string;
        conversationId: string;
    } | null>(null);

    const apiURL = 'https://rag-flask-api.onrender.com';
    const [loadingMap, setLoadingMap] = useState<{ [key: string]: boolean }>({});

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

    const fetchConversationHistory = async (chatbotId: string, conversationId: string) => {
        setLoadingMap((prev) => ({ ...prev, [conversationId]: true }));
        setApiError(null);

        try {
            const response = await axios.get(`${apiURL}/conversations/${chatbotId}/${conversationId}`);
            setConversationHistory(response.data);
            setSelectedConversation({ chatbotId, conversationId });
            setOpenModal(true);
        } catch (error) {
            setApiError('Failed to fetch conversation history.');
            console.error(error);
        } finally {
            setLoadingMap((prev) => ({ ...prev, [conversationId]: false }));
        }
    };

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

            <ConversationsTable
                conversations={conversations}
                onViewHistory={fetchConversationHistory}
                loadingMap={loadingMap}
            />

            {selectedConversation && (
                <ConversationHistoryModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    conversationHistory={conversationHistory}
                    conversationId={selectedConversation.conversationId}
                    conversationHistoryError={apiError}
                />
            )}
        </Box>
    );
};

export default ChatbotConversationsPage;