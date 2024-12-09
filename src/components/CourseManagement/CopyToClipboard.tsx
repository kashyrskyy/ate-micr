// src/components/UserAccount/CopyToClickboard.tsx

import React, { useState } from 'react';
import { Chip, Tooltip } from '@mui/material';

interface CopyToClipboardProps {
  text: string;
  tooltipText?: string;
  successText?: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text, tooltipText = "Click to Copy", successText = "Copied!" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(err => console.error('Could not copy text: ', err));
  };

  return (
    <Tooltip title={copied ? successText : tooltipText} enterDelay={300} leaveDelay={200}>
      <Chip
        label={text}
        variant="outlined"
        onClick={handleCopy}
        sx={{
          borderRadius: '15px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: '#e0f2f1',
          color: '#00695c',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          fontFamily: 'Gabarito, sans-serif',
        }}
      />
    </Tooltip>
  );
};

export default CopyToClipboard;
