// src/components/ChatbotIntegration/Dropdown.tsx

import React from 'react';
import { Select, MenuItem, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

interface DropdownProps {
  label: string;
  value: string | null;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { id: string; title: string }[];
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, onChange, options, placeholder }) => (
  <>
    <Typography 
      sx={{
        fontFamily: '"Staatliches", sans-serif',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginBottom: '8px',
      }}
    >
      {label}
    </Typography>
    <Select
      value={value || ''}
      onChange={onChange}
      displayEmpty
      sx={{
        width: '100%',
        marginBottom: 2,
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        fontFamily: '"Gabarito", sans-serif',
        fontSize: '1rem',
      }}
    >
      <MenuItem 
        value="" 
        disabled
        sx={{
            fontFamily: '"Gabarito", sans-serif',
            fontSize: '1rem',
        }}
      >
        {placeholder}
      </MenuItem>
      {options.map((option) => (
        <MenuItem 
            key={option.id} 
            value={option.id}
            sx={{
                fontFamily: '"Gabarito", sans-serif',
                fontSize: '1rem',
            }}
        >
          {option.title}
        </MenuItem>
      ))}
    </Select>
  </>
);

export default Dropdown;