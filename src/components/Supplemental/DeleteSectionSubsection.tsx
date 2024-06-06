// src/components/Supplemental/DeleteSectionSubsection.tsx
import React from 'react';
import { IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface DeleteSectionSubsectionProps {
  onDelete: () => void;
  itemType: 'section' | 'subsection' | 'subSubsection'; // Add 'subSubsection'
}

const DeleteSectionSubsection: React.FC<DeleteSectionSubsectionProps> = ({ onDelete, itemType }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    onDelete();
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClickOpen} size="small">
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Delete ${itemType}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Are you sure you want to delete this ${itemType}? This action cannot be undone.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteSectionSubsection;