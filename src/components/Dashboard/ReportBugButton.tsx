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
            className="report-bug-button"
            startIcon={<BugReportIcon />}
        >
            Provide Feedback
        </Button>
    );
};

export default ReportBugButton;