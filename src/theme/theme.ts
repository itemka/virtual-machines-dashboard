import { createTheme } from '@mui/material';

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
    purple: {
      main: '#5F3196',
      secondary: '#705289',
      light: '#FFF7FF',
    },
    greyScale: {
      divider: '#CCC4CE',
      surfaceVariant: '#E9E0EB',
      body: '#4A454E',
      outlineVariant: '#CCC4CE',
    },
    black: {
      title: '#1E1A20',
      main: '#000000',
    },
    errorExtended: {
      container: '#FFECEA',
      negative: '#DC3545',
    },
    headline: {
      small: '#333',
    },
    body: {
      medium: '#666',
    },
    error: {
      main: '#BA1A1A',
    },
    green: {
      main: '#66BB6A',
      positive: '#1A8754',
    },
    yellow: {
      main: '#FFEB3B',
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
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '19.12px',
    },
    h1: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '27.32px',
      textAlign: 'left',
    },
    h2: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '27.32px',
      textAlign: 'left',
    },
    button: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '19.12px',
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

declare module '@mui/material/styles' {
  interface Palette {
    purple?: {
      main: string;
      secondary: string;
      light: string;
    };
    greyScale?: {
      divider: string;
      surfaceVariant: string;
      body: string;
      outlineVariant: string;
    };
    black?: {
      title: string;
      main: string;
    };
    errorExtended?: {
      container: string;
      negative: string;
    };
    headline?: {
      small: string;
    };
    body?: {
      medium: string;
    };
    green?: {
      main: string;
      positive: string;
    };
    yellow?: {
      main: string;
    };
  }
  interface PaletteOptions {
    purple?: {
      main: string;
      secondary: string;
      light: string;
    };
    greyScale?: {
      divider: string;
      surfaceVariant: string;
      body: string;
      outlineVariant: string;
    };
    black?: {
      title: string;
      main: string;
    };
    errorExtended?: {
      container: string;
      negative: string;
    };
    headline?: {
      small: string;
    };
    body?: {
      medium: string;
    };
    green?: {
      main: string;
      positive: string;
    };
    yellow?: {
      main: string;
    };
  }
}
