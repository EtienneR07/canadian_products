import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/home';
import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <Paper elevation={3}>
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction
          component={Link}
          color="textPrimary"
          to="/"
          value="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/recipes"
          value="/recipes"
          label="Recipes"
          icon={<MenuBookIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/parameters"
          value="/parameters"
          label="Parameters"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
