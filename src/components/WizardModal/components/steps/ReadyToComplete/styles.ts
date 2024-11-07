import { defineStyles } from '@/theme/helpers/defineStyles';

export default defineStyles({
  container: (theme) => ({
    backgroundColor: theme.palette.purple?.light,
    padding: '24px',
    borderRadius: '8px',
    position: 'relative',
  }),
  lineContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 2,
  },
  lineTitle: (theme) => ({
    color: theme.palette.greyScale?.body,
    width: '80px',
  }),
  divider: {
    mb: '20px',
  },
  editIconContainer: (theme) => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    color: theme.palette.purple?.main,
  }),
});
