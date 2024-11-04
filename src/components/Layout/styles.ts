import { defineStyles } from '../../theme/helpers/defineStyles.ts';

export default defineStyles({
  container: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main,
  }),
  pageContainer: (theme) => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    padding: '24px',
    backgroundColor: theme.palette.primary.main,
    minHeight: 0,
  }),
});
