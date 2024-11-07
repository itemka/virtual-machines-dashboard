import { defineStyles } from '@/theme/helpers/defineStyles';

export default defineStyles({
  formControlLabel: {
    mb: '20px',
  },
  checkbox: (theme) => ({
    '&.Mui-checked': {
      color: theme.palette.purple?.main,
    },
  }),
});
