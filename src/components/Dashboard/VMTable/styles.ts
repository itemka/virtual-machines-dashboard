import { defineStyles } from '@/theme/helpers/defineStyles.ts';
import { darken, lighten } from '@mui/material';
import { VirtualMachine } from '@/types/virtualMachine.ts';

export default defineStyles({
  vmBlock: {
    backgroundColor: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountContainer: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '27px',
    height: '27px',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    padding: '6px 6px',
  }),
  amount: (theme) => ({
    fontWeight: 700,
    color: theme.palette.purple?.main,
    textAlign: 'center',
  }),
  button: (theme) => ({
    backgroundColor: theme.palette.purple?.main,
    color: theme.palette.secondary.main,
    borderRadius: '8px',

    '&:hover': {
      backgroundColor: darken(theme.palette.purple?.main ?? '', 0.2),
    },
  }),
  headTableRow: {
    '& .MuiTableCell-root': {
      borderBottom: 0,
    },
  },
  bodyTableRow: (theme) => ({
    backgroundColor: theme.palette.background.default,

    '& .MuiTableCell-root': {
      borderBottom: 0,
    },

    // for the first row
    '&:first-of-type td:first-of-type': {
      borderTopLeftRadius: '1rem',
    },
    '&:first-of-type td:last-of-type': {
      borderTopRightRadius: '1rem',
    },

    // for the last row
    '&:last-of-type td:first-of-type': {
      borderBottomLeftRadius: '1rem',
    },
    '&:last-of-type td:last-of-type': {
      borderBottomRightRadius: '1rem',
    },

    //  when there's only one row
    '&:only-of-type td:first-of-type': {
      borderTopLeftRadius: '1rem',
      borderBottomLeftRadius: '1rem',
    },
    '&:only-of-type td:last-of-type': {
      borderTopRightRadius: '1rem',
      borderBottomRightRadius: '1rem',
    },
  }),
  state: (theme) => (state: VirtualMachine['state']) => ({
    fontSize: '14px',
    fontWeight: 600,
    backgroundColor:
      state === 'Running'
        ? lighten(theme.palette.green?.main || '', 0.9)
        : lighten(theme.palette.errorExtended?.negative || '', 0.9),
    color:
      state === 'Running'
        ? theme.palette.green?.positive
        : theme.palette.errorExtended?.negative,
  }),
  id: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '19.12px',
    maxWidth: 150,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cpuAndGibChart: (theme) => ({
    width: '100%',
    height: '8px',
    backgroundColor: lighten(theme.palette.purple?.main || '', 0.8),
    borderRadius: '5px',

    '& .MuiLinearProgress-bar': {
      backgroundColor: theme.palette.purple?.main || '',
      borderRadius: '5px',
    },
  }),
  gibChart: (theme) => ({
    width: '100%',
    height: '8px',
    backgroundColor: lighten(theme.palette.purple?.main || '', 0.8),
    borderRadius: '5px',
    '& .MuiLinearProgress-bar': {
      backgroundColor: theme.palette.purple?.main || '',
      borderRadius: '5px',
    },
  }),
});
