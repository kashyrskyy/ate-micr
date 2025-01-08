// src/components/ChatbotConversations/ChatbotConversationsPage.tsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { Box, Typography, CircularProgress, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material'; // Import SelectChangeEvent
import { useNavigate } from 'react-router-dom';

import ConversationsTable from './ConversationsTable';
import axios from 'axios';
import ConversationHistoryModal from './ConversationHistoryModal';

import Pagination from './Pagination';
import ChatbotDetails from './ChatbotDetails';

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
    const [filteredConversations, setFilteredConversations] = useState<Conversation[]>([]);
    const [chatbotIds, setChatbotIds] = useState<string[]>([]);
    const [selectedChatbotId, setSelectedChatbotId] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [conversationsPerPage] = useState(10);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [conversationHistory, setConversationHistory] = useState<any[]>([]);
    const [apiError, setApiError] = useState<string | null>(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedConversation, setSelectedConversation] = useState<{
        chatbotId: string;
        conversationId: string;
    } | null>(null);
    const [loadingMap, setLoadingMap] = useState<{ [key: string]: boolean }>({});

    const apiURL = 'https://rag-flask-api.onrender.com';

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'conversations'));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Conversation[];
                setConversations(data);

                const uniqueChatbotIds = Array.from(new Set(data.map((item) => item.chatbotId)));
                setChatbotIds(['All', ...uniqueChatbotIds]);

                setFilteredConversations(data);
            } catch (error) {
                console.error('Error fetching chatbot conversations:', error);
                setError('Failed to load conversations. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchConversations();
    }, [db]);

    const handleFilterChange = (event: SelectChangeEvent<string>) => {
      const selected = event.target.value as string;
      setSelectedChatbotId(selected);
  
      if (selected === 'All') {
          setFilteredConversations(conversations);
      } else {
          setFilteredConversations(conversations.filter((conv) => conv.chatbotId === selected));
      }
  
      setCurrentPage(1); // Reset to the first page
    };

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

    // Pagination Logic
    const indexOfLastConversation = currentPage * conversationsPerPage;
    const indexOfFirstConversation = indexOfLastConversation - conversationsPerPage;
    const currentConversations = filteredConversations.slice(indexOfFirstConversation, indexOfLastConversation);

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

            {/* Filter by Chatbot ID */}
            <FormControl sx={{ mb: 3, minWidth: 200 }}>
                <InputLabel id="filter-chatbot-id">Filter by Chatbot ID</InputLabel>
                <Select
                    labelId="filter-chatbot-id"
                    value={selectedChatbotId}
                    onChange={handleFilterChange}
                >
                    {chatbotIds.map((id) => (
                        <MenuItem key={id} value={id}>
                            {id}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Chatbot Details */}
            {selectedChatbotId !== 'All' && (
                <ChatbotDetails chatbotId={selectedChatbotId} />
            )}

            {/* Conversations Table */}
            <ConversationsTable
                conversations={currentConversations}
                onViewHistory={fetchConversationHistory}
                loadingMap={loadingMap}
            />

            {/* Pagination */}
            <Pagination
                totalItems={filteredConversations.length}
                itemsPerPage={conversationsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
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