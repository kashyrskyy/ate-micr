// NotebookTable.tsx
import React from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
} from '@mui/material';

import { Timestamp, FieldValue } from 'firebase/firestore';
import { Design } from '../../types/types'; // Import the Design interface

// Define the types for the component props
interface NotebookTableProps {
  designs: Design[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  isAdmin: boolean;
}

const NotebookTable: React.FC<NotebookTableProps> = ({ designs, handleEdit, handleDelete, isAdmin }) => {
  // Function to format Firestore timestamp to a readable format
  const formatDate = (value: Timestamp | Date | FieldValue | null): string => {
    if (!value) return 'N/A';

    // If value is a Timestamp
    if (value instanceof Timestamp) {
      const date = value.toDate();
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    }

    // If value is a Date
    if (value instanceof Date) {
      return value.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    }

    // Handle other cases (like FieldValue)
    return 'N/A';
  };   

  // Function to format the input date (YYYY-MM-DD) to a more readable format
  const formatInputDate = (inputDate: string | Date | Timestamp | null): string => {
    // Check if inputDate is undefined or null
    if (!inputDate) return '';
  
    let dateStr = typeof inputDate === 'string' ? inputDate : '';
  
    // If inputDate is a Date object, convert to string in YYYY-MM-DD format
    if (inputDate instanceof Date) {
      dateStr = inputDate.toISOString().split('T')[0];
    }
  
    // If inputDate is a Firestore Timestamp, convert to Date then to string
    if ((inputDate as Timestamp).toDate) {
      dateStr = (inputDate as Timestamp).toDate().toISOString().split('T')[0];
    }
  
    // Now, assuming dateStr is a string in YYYY-MM-DD format, split and format as needed
    const [year, month, day] = dateStr.split('-').map(num => parseInt(num, 10));
    const date = new Date(year, month - 1, day);
    
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ '& .MuiTableCell-root': { fontSize: '1rem' }, '& .MuiTableCell-head': { fontSize: '1.2rem', backgroundColor: '#1A76D3', color: "white"} }}>
        <TableHead>
          <TableRow sx={{ height: '60px' }}> 
            <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>Title</TableCell>
            {isAdmin && <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>User ID</TableCell>}
            <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>Created</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>Due</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '10%' }}>Edit</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '10%' }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {designs && designs.length > 0 ? (
            designs.map((design) => (
              <TableRow key={design.id} sx={{ height: '80px' }}>
                <TableCell>
                  <button onClick={() => handleEdit(design.id)} className="hyperlink-style">{design.title}</button>
                </TableCell>
                {isAdmin && <TableCell>{design.userId}</TableCell>}
                <TableCell>{formatDate(design.dateCreated)}</TableCell>
                <TableCell>{formatInputDate(design.dateDue)}</TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEdit(design.id)} color="primary">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(design.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={isAdmin ? 6 : 5}>No Designs Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NotebookTable;
