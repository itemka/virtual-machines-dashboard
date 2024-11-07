import { defineStyles } from '@/theme/helpers/defineStyles';
import { darken } from '@mui/material';

export default defineStyles({
  container: (theme) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '312px',
    backgroundColor: theme.palette.errorExtended?.container,
    borderRadius: '28px',
    p: '24px',
    textAlign: 'center',
  }),
  errorInfoIcon: {
    mb: '4px',
  },
  title: (theme) => ({
    color: theme.palette.headline.small,
    mb: '10px',
  }),
  description: (theme) => ({
    mb: '30px',
    color: theme.palette.body.medium,
    textAlign: 'left',
  }),
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 2,
  },
  leaveButton: (theme) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.secondary.main,
    textTransform: 'none',
    fontWeight: 'bold',
    borderRadius: '100px',
    padding: '10px 24px',
    '&:hover': {
      backgroundColor: darken(theme.palette.error.main, 0.1),
    },
  }),
  cancelButton: (theme) => ({
    textTransform: 'none',
    color: theme.palette.headline.small,
    fontWeight: 'bold',
  }),
});
