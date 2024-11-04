import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F9FAFB',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#212529',
      secondary: '#495057',
    },
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '21.86px',
      textAlign: 'left',
    },
    h1: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '27.32px',
      textAlign: 'left',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          height: 100%;
          scroll-behavior: smooth;
        }      
        
        @font-face {
          font-family: 'Manrope';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root': {
            color: 'initial',
          },
        },
      },
    },
  },
});
