// Footer.tsx

import React from 'react';
import { Divider, Box, Typography } from '@mui/material';

import ReportBugButton from './ReportBugButton';

function Footer() {
    return (
      <Box component="footer" sx={{ width: '100%', textAlign: 'center', py: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', px: 2 }}>
            <ReportBugButton />
        </Box>
        <Divider />
        <Box sx={{ my: 2 }}>
          <img 
            src={`${import.meta.env.VITE_DEPLOY_ENV === 'github' ? '/ate-micr/' : '/'}FooterLogoLong.png`} 
            alt="Logo" 
            style={{ maxWidth: '500px', maxHeight: '400px', width: 'auto', height: 'auto' }} 
          />
          <Typography variant="body2" sx={{ mt: 1 }}>
            The Institute for Future Intelligence (IFI) and Kapi'olani Community College (KCC) is funded in part by the National Science Foundation grant DUE 2300976.
          </Typography>
          <Typography variant="body2">
            © 2024 Institute for Future Intelligence and Kapiʻolani Community College Antibody Engineering & Research Projects
          </Typography>
        </Box>
      </Box>
    );
}

export default Footer;