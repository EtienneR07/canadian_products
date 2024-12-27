import { Box, IconButton, IconProps, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

interface ButtonIconProps {
  text: string;
  icon: ReactElement<IconProps>;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ text, icon, onClick }) => {
  return (
    <IconButton color="inherit" onClick={onClick}>
      <Box className="flex flex-col items-center">
        {icon}
        <Typography>{text}</Typography>
      </Box>
    </IconButton>
  );
};

export default ButtonIcon;
