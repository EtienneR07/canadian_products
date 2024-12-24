import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Sidenav from '../side-nav/Sidenav';

interface ButtonAppBarProps {
  title?: string;
}

const ButtonAppBar: React.FC<ButtonAppBarProps> = ({ title }) => {
  const [openDrawer, setOpen] = React.useState(false);

  const handleMenuClick = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title || 'Recipe Keeper'}
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Sidenav open={openDrawer} setOpen={setOpen} />
    </Box>
  );
};

export default ButtonAppBar;
