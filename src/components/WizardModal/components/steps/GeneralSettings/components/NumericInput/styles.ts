import { defineStyles } from '@/theme/helpers/defineStyles';
import { lighten } from '@mui/material';

export default defineStyles({
  container: (theme) => (error: boolean | undefined) => ({
    '& .MuiInputLabel-root.Mui-focused': {
      color: error ? theme.palette.error.main : theme.palette.purple?.main,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.purple?.main,
      },
    },
    position: 'relative',
  }),
  iconButton: {
    p: 0,
  },
  inputProps: {
    overflow: 'hidden',
  },
  hiddenText: {
    position: 'absolute',
    visibility: 'hidden',
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
  suffix: (theme) => (inputWidth: number) => ({
    position: 'absolute',
    left: `${18 + inputWidth}px`,
    top: '35%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: lighten(theme.palette.black.main, 0.8),
  }),
});
