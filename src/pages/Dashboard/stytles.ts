import { defineStyles } from '@/theme/helpers/defineStyles.ts';

const blockStyles = defineStyles({
  stateBlock: (theme) => ({
    backgroundColor: theme.palette.background.default,
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '1rem',
    boxShadow: 'none',
  }),
});

export default defineStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '32px',
    columnGap: '16px',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  loading: (theme) => ({
    color: theme.palette.purple.main,
  }),
  stateBlock: (theme) => ({
    ...blockStyles.stateBlock(theme),
    flex: 4,
  }),
  blockTitle: {
    fontWeight: 700,
  },
  donutChartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  trendBlock: (theme) => ({
    ...blockStyles.stateBlock(theme),
    flex: 7,
  }),
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selector: (theme) => ({
    fontSize: '14px',
    color: theme.palette.text.primary,
    padding: '0',
    minWidth: '100px',
    border: 0,
    borderRadius: 0,

    '& .MuiOutlinedInput-input': {
      padding: 0,
    },

    '& svg': {
      top: 'initial',
    },
  }),
});
