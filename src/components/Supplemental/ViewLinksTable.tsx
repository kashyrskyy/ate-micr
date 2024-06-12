// src/components/Supplemental/ViewLinksTable.tsx
import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';

interface Link {
  title: string;
  url: string;
  description: string;
}

interface ViewLinksTableProps {
  links: Link[];
}

const ensureAbsoluteUrl = (url: string) => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`;
    }
    return url;
};

const ViewLinksTable: React.FC<ViewLinksTableProps> = ({ links }) => {
  if (links.length === 0) return null;

  return (
    <Box sx={{ mt: 2, width: '50%' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Links</Typography>
      <Box sx={{ display: 'flex', mb: 1, borderBottom: '1px solid gray' }}>
        <Typography sx={{ flexBasis: '30%', fontWeight: 'bold' }}>Title</Typography>
        <Typography sx={{ flexBasis: '30%', fontWeight: 'bold' }}>URL</Typography>
        <Typography sx={{ flexBasis: '40%', fontWeight: 'bold' }}>Description</Typography>
      </Box>
      {links.map((link, index) => (
        <Box key={index}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, flexWrap: 'wrap', borderBottom: '1px solid lightgray' }}>
            <Typography sx={{ flexBasis: '30%', fontStyle: 'italic', wordWrap: 'break-word', paddingRight: '8px' }}>{link.title}</Typography>
            <MuiLink sx={{ flexBasis: '30%', wordWrap: 'break-word', paddingRight: '8px' }} href={ensureAbsoluteUrl(link.url)} target="_blank" rel="noopener">
              {link.url}
            </MuiLink>
            <Typography sx={{ flexBasis: '40%', wordWrap: 'break-word' }}>{link.description}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ViewLinksTable;