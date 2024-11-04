import { defineStyles } from '../../theme/helpers/defineStyles.ts';

const blockStyles = defineStyles({
  stateBlock: (theme) => ({
    backgroundColor: theme.palette.background.default,
    padding: '2rem',
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
    gap: '16px',
  },
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
  vmBlock: {
    backgroundColor: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
  },
});
