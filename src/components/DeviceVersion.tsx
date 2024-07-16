// src/components/DeviceVersion.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

// Import the custom hook for device detection
import useDeviceDetection from '../hooks/useDeviceDetection';

const DeviceVersion: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceDetection();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {isMobile && <Typography variant="body1">ATE 2.0 Mobile Version</Typography>}
          {isTablet && <Typography variant="body1">ATE 2.0 Tablet Version</Typography>}
          {isDesktop && <Typography variant="body1">ATE 2.0 Desktop Version</Typography>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DeviceVersion;