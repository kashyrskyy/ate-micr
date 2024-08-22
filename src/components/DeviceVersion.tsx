// src/components/DeviceVersion.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

// Import the custom hook for device detection
import useDeviceDetection from '../hooks/useDeviceDetection';

const DeviceVersion: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceDetection();

  return (
    <AppBar position="static" className="device-version-bar">
      <Toolbar className="device-version-toolbar">
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {isMobile && <Typography variant="body1" className="device-version-text">NexLAB Mobile Version 1.0</Typography>}
          {isTablet && <Typography variant="body1" className="device-version-text">NexLAB Tablet Version 1.0</Typography>}
          {isDesktop && <Typography variant="body1" className="device-version-text">NexLAB Desktop Version 1.0</Typography>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DeviceVersion;