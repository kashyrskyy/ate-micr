// NotebookTable.jsx
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

const NotebookTable = ({ designs, handleEdit, handleDelete, isAdmin }) => {
  // Function to format Firestore timestamp to a readable format
  const formatDate = (timestamp) => {
    // Check if timestamp is undefined or null
    if (!timestamp) return 'N/A';
  
    // Check for placeholder for server-generated timestamps
    if (timestamp._methodName === 'serverTimestamp') {
      return 'Pending...';
    }
  
    // Check for actual Date object or Firestore Timestamp object
    let date = timestamp instanceof Date ? timestamp : timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000);
  
    // Format the date as needed
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };   

  // Function to format the input date (YYYY-MM-DD) to a more readable format
  const formatInputDate = (inputDate) => {
    // Check if inputDate is undefined or null
    if (!inputDate) return '';
  
    let dateStr = inputDate;
  
    // If inputDate is a Date object, convert to string in YYYY-MM-DD format
    if (inputDate instanceof Date) {
      dateStr = inputDate.toISOString().split('T')[0];
    }
  
    // If inputDate is a Firestore Timestamp, convert to Date then to string
    if (inputDate.toDate) {
      dateStr = inputDate.toDate().toISOString().split('T')[0];
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
                <TableCell>{design.dateCreated ? formatDate(design.dateCreated) : 'N/A'}</TableCell>
                <TableCell>{design.dateDue ? formatInputDate(design.dateDue) : 'N/A'}</TableCell>
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
