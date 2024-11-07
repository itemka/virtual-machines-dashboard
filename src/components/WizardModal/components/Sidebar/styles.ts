import { defineStyles } from '@/theme/helpers/defineStyles';

export default defineStyles({
  container: (theme) => ({
    minWidth: '244px',
    maxWidth: '244px',
    minHeight: '566px',
    maxHeight: '80vh',
    height: '100%',
    backgroundColor: theme.palette.purple?.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: theme.palette.secondary.main,
    position: 'relative',
    overflow: 'hidden',
  }),
  modalIllustration: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    padding: '24px',
  },
  title: {
    mb: '10px',
  },
  mainTitle: {
    fontSize: '22px',
    mb: '30px',
  },
  divider: (theme) => ({
    backgroundColor: theme.palette.greyScale?.divider,
    mb: '20px',
  }),
  listItem: {
    p: 0,
    m: 0,
  },
  listItemIcon: {
    minWidth: 'initial',
    mr: '5px',
  },
  firstStep: (theme) => (step: number) => ({
    fontWeight: step === 1 ? 'bold' : 'normal',
    color:
      step > 1
        ? theme.palette.greyScale?.surfaceVariant
        : theme.palette.secondary.main,
  }),
  secondStep: (theme) => (step: number) => ({
    fontWeight: step === 2 ? 'bold' : 'normal',
    color:
      step === 2
        ? theme.palette.secondary.main
        : theme.palette.greyScale?.surfaceVariant,
  }),
});
