import { defineStyles } from '@/theme/helpers/defineStyles';

export default defineStyles({
  title: (theme) => ({
    fontSize: 22,
    fontWeight: 600,
    color: theme.palette.black?.title,
    mb: '16px',
  }),
  description: (theme) => ({
    color: theme.palette.black?.title,
    mb: '30px',
  }),
});
