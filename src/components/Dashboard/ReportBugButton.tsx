// ReportBugButton.tsx

import React from 'react';
import { Button } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';

const ReportBugButton: React.FC = () => {
    const handleBugReportClick = () => {
        window.open('https://help.waveshi.org', '_blank', 'noopener,noreferrer');
    };

    return (
        <Button 
            onClick={handleBugReportClick}
            sx={{ 
                my: 1, 
                px: '16px !important', 
                py: '8px !important', 
                minWidth: '150px',
                height: '50px', // Explicit height
                backgroundColor: 'white !important',
                border: '2px solid blue !important',
                color: 'blue !important',
                textTransform: 'none !important', 
                borderRadius: '20px !important', 
                boxShadow: '0 3px 5px 2px rgba(0, 0, 255, .3) !important',
                fontSize: '1rem !important',
                transition: 'background-color 0.3s !important, color 0.3s !important', // Smooth transition for background and color changes
                '&:hover': {
                    backgroundColor: 'blue !important',
                    color: 'white !important',
                    borderColor: 'blue !important'
                },
                '&:active': {
                    backgroundColor: 'blue !important',
                    color: 'white !important',
                    borderColor: 'blue !important'
                },
                '&:focus': {
                    backgroundColor: 'white !important',
                    color: 'blue !important',
                    borderColor: 'blue !important'
                }
            }}
            startIcon={<BugReportIcon />}
        >
            Report a Bug
        </Button>
    );
};

export default ReportBugButton;