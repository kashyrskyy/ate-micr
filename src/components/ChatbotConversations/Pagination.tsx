// src/components/ChatbotConversations/Pagination.tsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
            <Button
                variant="outlined"
                disabled={currentPage === 1}
                onClick={handlePrevious}
            >
                Previous
            </Button>
            <Typography variant="body1">
                Page {currentPage} of {totalPages}
            </Typography>
            <Button
                variant="outlined"
                disabled={currentPage === totalPages}
                onClick={handleNext}
            >
                Next
            </Button>
        </Box>
    );
};

export default Pagination;