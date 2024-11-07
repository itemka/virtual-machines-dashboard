import { defineStyles } from '@/theme/helpers/defineStyles';
import { darken } from '@mui/material';

export default defineStyles({
  indicatorContainer:
    (_theme) =>
    ({
      sliderTopOffset,
      sliderLetOffset,
    }: {
      sliderTopOffset: number;
      sliderLetOffset: number;
    }) => ({
      position: 'absolute',
      top: `${sliderTopOffset}px`,
      left: `${sliderLetOffset}px`,
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      zIndex: 5000,
      pointerEvents: 'none',
    }),
  purpleMarkerContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  verticalVectorIcon: {
    position: 'absolute',
    top: '2px',
  },
  currentRamValue: (theme) => ({
    color: theme.palette.purple.main,
    fontWeight: 'bold',
    fontSize: '10px',
    mt: '2px',
  }),
  sliderContainer: {
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    overflow: 'visible',
  },
  rangeIndicator: (theme) => ({
    height: '8px',
    width: '100%',
    position: 'relative',
    backgroundColor: darken(theme.palette.secondary.main, 0.06),
    overflow: 'hidden',
  }),
  greenSection: (theme) => ({
    position: 'absolute',
    height: '100%',
    width: '31.6%',
    left: '32%',
    backgroundColor: theme.palette.green.main,
  }),
  yellowSection: (theme) => ({
    position: 'absolute',
    height: '100%',
    width: '36%',
    left: '64%',
    backgroundColor: theme.palette.yellow.main,
  }),
  gbLabelsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    mt: 1,
    position: 'relative',
    zIndex: 5,
    backgroundColor: 'white',
  },
  gbLabel: (theme) => ({
    color: theme.palette.text.secondary,
    fontSize: '13px',
  }),
  lineIcon: {
    position: 'absolute',
    zIndex: 1,
    top: '-8px',
    left: '125px',
  },
  recommendedContainer: {
    display: 'flex',
    justifyContent: 'center',
    mt: 1,
  },
  recommended: (theme) => ({
    color: theme.palette.greyScale.body,
    paddingBottom: '2px',
  }),
});
