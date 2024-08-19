// src/components/Messages/PinMessage.tsx
import React from 'react';
import { IconButton } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import { Message } from './MessagesDisplay';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

interface PinMessageProps {
  message: Message;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const PinMessage: React.FC<PinMessageProps> = ({ message, messages, setMessages }) => {
  const db = getFirestore();

  const handlePinMessage = async () => {
    try {
      // Toggle the pinned state
      const newPinnedState = !message.isPinned;
      
      // Update Firestore document
      const messageRef = doc(db, 'messages', message.id);
      await updateDoc(messageRef, { isPinned: newPinnedState });

      // Update local state
      const updatedMessages = messages.map((msg) =>
        msg.id === message.id ? { ...msg, isPinned: newPinnedState } : msg
      );

      // Sort messages, pinned messages at the top
      updatedMessages.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));

      // Update the local state
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error updating pin status: ", error);
    }
  };

  return (
    <IconButton onClick={handlePinMessage} sx={{ marginRight: 1 }}>
      <PushPinIcon color={message.isPinned ? 'primary' : 'inherit'} />
    </IconButton>
  );
};

export default PinMessage;