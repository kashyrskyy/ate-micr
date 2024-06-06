// src/components/Supplemental/DeleteMaterialDialog.tsx
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

interface DeleteMaterialDialogProps {
  materialId: string;
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteMaterialDialog: React.FC<DeleteMaterialDialogProps> = ({ materialId, open, onClose, onDelete }) => {
  const db = getFirestore();

  const handleConfirmDelete = async () => {
    const docRef = doc(db, 'materials', materialId);
    await deleteDoc(docRef);
    onDelete();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Material</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this material? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirmDelete} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteMaterialDialog;