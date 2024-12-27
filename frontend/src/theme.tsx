import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[400],
    },
    text: {
      primary: '#303030',
    },
  },
});

export default theme;
