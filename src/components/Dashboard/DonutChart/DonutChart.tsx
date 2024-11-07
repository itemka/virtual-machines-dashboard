import { useMemo } from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import { Box, lighten, Typography, useTheme } from '@mui/material';
import { virtualMachinesSelector } from '@/redux/virtualMachines/selectors.ts';
import { useAppSelector } from '@/hooks/storeHooks.ts';
import styles from './styles.ts';

export function DonutChart() {
  const theme = useTheme();
  const { data: virtualMachines } = useAppSelector(virtualMachinesSelector);

  const { donutData, totalValue } = useMemo(() => {
    const stoppedValue = virtualMachines.filter(
      (item) => item.state === 'Stopped',
    ).length;
    const runningValue = virtualMachines.filter(
      (item) => item.state === 'Running',
    ).length;

    const donutData = [
      {
        name: 'Stopped',
        value: stoppedValue,
        color: theme.palette.errorExtended?.negative,
      },
      {
        name: 'Running',
        value: runningValue,
        color: lighten(theme.palette.green?.positive || '', 0.2),
      },
    ];

    return {
      donutData,
      totalValue: stoppedValue + runningValue,
    };
  }, [virtualMachines]);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.pieChartContainer}>
        <PieChart width={180} height={180}>
          <Pie
            data={donutData}
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            strokeWidth={3}
          >
            {donutData.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <Box sx={styles.textInsideChart}>
          <Typography
            variant="h4"
            fontWeight="bold"
            fontSize="40px"
            color="textPrimary"
          >
            {totalValue}
          </Typography>
          <Typography variant="body2" color="textSecondary" fontSize="12px">
            Total number
          </Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" ml={4} mt={1}>
        {donutData.map((item) => (
          <Box key={item.name} display="flex" alignItems="center" mb={0.5}>
            <Box
              sx={{
                ...styles.legendCircle,
                backgroundColor: item.color,
              }}
            />
            <Typography variant="body2" fontWeight="bold" mr={0.5}>
              {item.value}
            </Typography>
            <Typography variant="body2" color="textPrimary">
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
