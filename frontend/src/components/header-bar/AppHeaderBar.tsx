import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/add';
import { Link } from 'react-router-dom';

const AppHeaderBar: React.FC = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{ top: 0 }}>
      <Toolbar>
        <Box className="flex justify-around w-full">
          <Typography sx={{ fontWeight: 550 }} color="textSecondary">
            Recipe Tracker
          </Typography>
        </Box>
        <Link to={'/recipes/edit'}>
          <IconButton sx={{ color: 'text.secondary' }}>
            <AddIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeaderBar;
