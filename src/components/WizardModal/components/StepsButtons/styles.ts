import { defineStyles } from '@/theme/helpers/defineStyles';

export default defineStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '16px',
  },
  backButton: (theme) => ({
    backgroundColor: 'transparent',
    color: theme.palette.purple?.main,
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '16px',
    '&:hover': {
      backgroundColor: theme.palette.purple?.main,
      color: theme.palette.secondary?.main,
    },
    padding: '10px 24px',
    borderRadius: '100px',
    boxShadow: 'none',
  }),
  nextButton: (theme) => ({
    backgroundColor: theme.palette.purple?.main,
    color: theme.palette.secondary.main,
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '16px',
    '&:hover': {
      backgroundColor: theme.palette.purple?.secondary,
    },
    padding: '10px 24px',
    borderRadius: '100px',
  }),
  createButton: (theme) => ({
    backgroundColor: theme.palette.purple?.main,
    color: theme.palette.secondary.main,
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '16px',
    '&:hover': {
      backgroundColor: theme.palette.purple?.secondary,
    },
    padding: '10px 24px',
    borderRadius: '100px',
  }),
});
