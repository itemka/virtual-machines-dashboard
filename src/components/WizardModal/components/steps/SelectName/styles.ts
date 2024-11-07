import { defineStyles } from '@/theme/helpers/defineStyles';

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
  }),
});
