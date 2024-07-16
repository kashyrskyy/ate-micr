// src/hooks/useDeviceDetection.ts
import { useMediaQuery, useTheme } from '@mui/material';

const useDeviceDetection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return { isMobile, isTablet, isDesktop };
};

export default useDeviceDetection;