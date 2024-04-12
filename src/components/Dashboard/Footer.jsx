// Footer.jsx

import React from 'react';
import { Divider, Box, Typography } from '@mui/material';

function Footer() {
    return (
      <Box component="footer" sx={{ width: '100%', textAlign: 'center', py: 2 }}>
        <Divider />
        <Box sx={{ my: 2 }}>
          <img 
            src={`${import.meta.env.VITE_DEPLOY_ENV === 'github' ? '/ate-micr/' : '/'}FooterLogoLong.png`} 
            alt="Logo" 
            style={{ maxWidth: '500px', maxHeight: '400px', width: 'auto', height: 'auto' }} 
          />
          <Typography variant="body2">
            © 2024 Institute for Future Intelligence and Kapiʻolani Community College Antibody Engineering & Research Projects
          </Typography>
        </Box>
      </Box>
    );
}

export default Footer;