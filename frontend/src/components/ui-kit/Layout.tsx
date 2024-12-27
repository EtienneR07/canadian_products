import React from 'react';
import BottomNav from '../bottom-nav/BottomNav';
import AppHeaderBar from '../header-bar/AppHeaderBar';
import { Box } from '@mui/material';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <AppHeaderBar />
      <Box className="min-h-full flex-grow m-2">{children}</Box>
      <BottomNav />
    </div>
  );
};

export default Layout;
