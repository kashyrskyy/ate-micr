// src/components/ExportToCSV.tsx
import React from 'react';
import { Button, Box } from '@mui/material';

interface ExportToCSVProps {
  students: any[];
  selectedCourse: string;
}

const ExportToCSV: React.FC<ExportToCSVProps> = ({ students, selectedCourse }) => {
  const handleExport = () => {
    if (students.length > 0) {
      // Define the CSV headers
      const headers = ['User ID', 'Courses', 'Last Login'];

      // Map student data to CSV format with proper handling of date and time
      const csvRows = students.map((student) => [
        `"${student.id}"`, // Enclosing ID in quotes to handle special characters
        `"${student.class.join(', ')}"`, // Enclosing course names in quotes
        `"${student.lastLogin ? new Date(student.lastLogin.seconds * 1000).toLocaleString() : 'N/A'}"`, // Proper date formatting
      ]);

      // Combine headers and rows with comma separation and line breaks
      const csvContent = [headers.join(','), ...csvRows.map(row => row.join(','))].join('\n');

      // Create a blob and download the file
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${selectedCourse}_students.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleExport}
        disabled={students.length === 0}
        sx={{
          background: 'linear-gradient(45deg, #3f51b5 30%, #1e88e5 90%)',
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          color: 'white',
          padding: '0 30px',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'none', // Text is not all uppercase
          '&:hover': {
            background: 'linear-gradient(45deg, #1e88e5 30%, #3f51b5 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          },
        }}
      >
        Export as CSV
      </Button>
    </Box>
  );
};

export default ExportToCSV;