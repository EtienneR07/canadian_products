import { Box, IconButton, IconProps, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

interface RIconButtonProps {
  text: string;
  icon: ReactElement<IconProps>;
}

const RIconButton: React.FC<RIconButtonProps> = ({ text, icon }) => {
  return (
    <IconButton color="inherit">
      <Box className="flex flex-col items-center">
        {icon}
        <Typography>{text}</Typography>
      </Box>
    </IconButton>
  );
};

export default RIconButton;
