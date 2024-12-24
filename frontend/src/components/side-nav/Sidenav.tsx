import React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import { Drawer } from '@mui/material';

interface SidenavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidenav: React.FC<SidenavProps> = ({ open, setOpen }) => {
  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box className="flex items-center gap-2 ml-auto mt-1 mr-2">
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer' }}
          >
            Close
          </Typography>
          <ModalClose
            id="close-icon"
            sx={{ position: 'initial' }}
            onClick={() => setOpen(false)}
          />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <ListItemButton sx={{ fontWeight: 'lg' }}>Home</ListItemButton>
          <ListItemButton>My Recipes</ListItemButton>
          <ListItemButton>Preferences</ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidenav;
