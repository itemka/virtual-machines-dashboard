import { defineStyles } from '@/theme/helpers/defineStyles';

export default defineStyles({
  container: (theme) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.default,
    width: '700px',
    borderRadius: '8px',
    overflow: 'hidden',
  }),
  content: {
    radius: '8px',
  },
  header: {
    position: 'relative',
    padding: '16px',
  },
  headerText: (theme) => ({
    color: theme.palette.purple?.secondary,
  }),
  headerCloseIcon: (theme) => ({
    position: 'absolute',
    right: 8,
    top: 8,
    color: theme.palette.grey[500],
  }),
  body: {
    display: 'flex',

    '& .formikForm': {
      width: '100%',
    },
  },
  bodyContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flexGrow: 1,
    p: '32px',
  },
  stepContainer: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  stepsButtonsContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
