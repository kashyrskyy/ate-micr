// src/components/Messages/DeleteMessage.tsx
import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc, doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

interface DeleteMessageProps {
  messageId: string;
  onDelete: (id: string) => void;
}

const DeleteMessage: React.FC<DeleteMessageProps> = ({ messageId, onDelete }) => {
  const db = getFirestore();

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'messages', messageId));
      onDelete(messageId);
    } catch (error) {
      console.error('Error deleting message: ', error);
    }
  };

  return (
    <IconButton onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteMessage;