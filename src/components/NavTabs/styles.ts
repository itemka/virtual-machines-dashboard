import { defineStyles } from '../../theme/helpers/defineStyles.ts';

export default defineStyles({
  tabs: (theme) => ({
    '& .MuiTab-root': {
      fontWeight: 400,
      fontSize: '16px',
      textTransform: 'none',
      color: theme.palette.text.secondary,
      letterSpacing: '0.5px',
    },
    '& .Mui-selected': {
      fontWeight: 700,
      letterSpacing: 'normal',
      color: theme.palette.text.primary,
    },
    '& .MuiTabs-indicator': {
      backgroundColor: theme.palette.text.primary,
    },
  }),
  tab: {
    marginRight: '16px',
  },
});
