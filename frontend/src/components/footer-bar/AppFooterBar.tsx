import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/home';
import React from 'react';
import RIconButton from '../ui-kit/RIconButton';

const AppFooterBar: React.FC = () => {
  return (
    <Box>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Box className="flex justify-around w-full">
            <RIconButton text="Home" icon={<HomeIcon />}></RIconButton>
            <RIconButton text="Recipes" icon={<MenuBookIcon />}></RIconButton>
            <RIconButton text="Settings" icon={<SettingsIcon />}></RIconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppFooterBar;
