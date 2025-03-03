import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {

      // main: '#f65d4e', // Modern Blue (trustworthy and professional)
      main: '#f65d4e', // Modern Blue (trustworthy and professional)
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0', // Vibrant Purple (creative and modern)
    },
    background: {
      default: '#f4f6f8', // Light Gray (clean, modern backdrop)
      paper: '#ffffff',
    },
    text: {
      primary: '#212121', // Dark Gray for readability
      secondary: '#757575', // Medium Gray for less prominent text
    },
    accent: {
      main: '#ff5722', // Energetic Orange for highlights
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontSize: '2rem', fontWeight: 700 },
    h2: { fontSize: '1.8rem', fontWeight: 600 },
    body1: { fontSize: '1rem', fontWeight: 400 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
