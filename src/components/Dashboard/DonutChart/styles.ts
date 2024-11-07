import { defineStyles } from '@/theme/helpers/defineStyles.ts';

export default defineStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  pieChartContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  donutChartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textInsideChart: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  legendCircle: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    mr: 1,
  },
});
