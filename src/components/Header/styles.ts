import { defineStyles } from '@/theme/helpers/defineStyles.ts';

export default defineStyles({
  nav: (theme) => ({
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
  }),
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  avatarContainer: {
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    ml: '30px',
    width: '32px',
    height: '32px',
  },
});
