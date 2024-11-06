import { Box, Typography, Paper, Stack, Button, darken } from '@mui/material';
import { useModalState } from '@/hooks/useModalState.ts';
import { WizardProvider } from '@/contexts/WizardContext.tsx';
import { WizardModal } from '@/components/WizardModal/WizardModal.tsx';
import AddIcon from '@/assets/plusIcon.svg?react';
import styles from './stytles.ts';

export function Dashboard() {
  const { isModalOpen, openModal, closeModal } = useModalState();

  return (
    <Box sx={styles.container}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems="stretch"
      >
        <Paper sx={styles.stateBlock}>
          <Typography variant="body1" sx={styles.blockTitle}>
            State
          </Typography>
          <Box sx={styles.donutChartContainer}>Donut chart and legend</Box>
        </Paper>

        <Paper sx={styles.trendBlock}>
          <Typography variant="body1" sx={styles.blockTitle}>
            Trend
          </Typography>
          <Box sx={styles.chartContainer}>Line Trend Chart</Box>
        </Paper>
      </Stack>

      <Paper sx={styles.vmBlock}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h1" sx={{ mr: '10px' }}>
              Virtual machines
            </Typography>

            <Box
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '27px',
                height: '27px',
                borderRadius: '50%',
                backgroundColor: theme.palette.secondary.main,
                padding: '6px 6px',
              })}
            >
              <Typography
                variant="body2"
                sx={(theme) => ({
                  fontWeight: 700,
                  color: theme.palette.purple?.main,
                  textAlign: 'center',
                })}
              >
                16
              </Typography>
            </Box>
          </Box>

          <Box>
            <WizardProvider>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={openModal}
                sx={(theme) => ({
                  backgroundColor: theme.palette.purple?.main,
                  color: theme.palette.secondary.main,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: darken(
                      theme.palette.purple?.main ?? '',
                      0.2,
                    ),
                  },
                })}
              >
                <Typography
                  variant="button"
                  sx={{
                    textTransform: 'none', // Prevent uppercase transformation
                  }}
                >
                  New
                </Typography>
              </Button>
              <WizardModal open={isModalOpen} onClose={closeModal} />
            </WizardProvider>
          </Box>
        </Box>

        <Box>
          {Array.from({ length: 50 }).map((_, index) => (
            <div key={index}>Virtual Machines Table's Row {index}</div>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
