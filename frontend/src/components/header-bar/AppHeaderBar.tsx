import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';

const AppHeaderBar: React.FC = () => {
  return (
    <Box>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Box className="flex justify-around w-full"></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeaderBar;
