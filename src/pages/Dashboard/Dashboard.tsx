import { Box, Typography, Paper, Stack } from '@mui/material';
import styles from './stytles.ts';

export function Dashboard() {
  return (
    <Box sx={styles.container}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        useFlexGap
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
        <Typography variant="h1">Virtual machines</Typography>
        <Box>
          {Array.from({ length: 50 }).map((_, index) => (
            <div key={index}>Virtual Machines Table's Row {index}</div>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
