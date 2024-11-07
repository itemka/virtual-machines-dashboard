import {
  Box,
  Typography,
  Paper,
  Stack,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import styles from './stytles.ts';
import { useEffect, useMemo, useState } from 'react';
import ArrowDownIcon from '@/assets/arrowDown.svg?react';
import { DonutChart } from '@/components/Dashboard/DonutChart/DonutChart.tsx';
import {
  AreaChartItem,
  TrendChart,
} from '@/components/Dashboard/TrendChart/TrendChart.tsx';
import { VMTable } from '@/components/Dashboard/VMTable/VMTable.tsx';
import { format, subDays } from 'date-fns';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks.ts';
import { virtualMachinesSelector } from '@/redux/virtualMachines/selectors.ts';
import { fetchVirtualMachines } from '@/redux/virtualMachines/fetchVirtualMachines.ts';
import CircularProgress from '@mui/material/CircularProgress';

export function Dashboard() {
  const dispatch = useAppDispatch();
  const { data: virtualMachines, pending } = useAppSelector(
    virtualMachinesSelector,
  );
  const [selectedRange, setSelectedRange] = useState(14);

  const handleRangeChange = (event: SelectChangeEvent<number>) => {
    setSelectedRange(+event.target.value);
  };

  // mocked trend chart data to see the chart behavior
  const trendChartData = useMemo(() => {
    const startValue = 200;
    const maxIncrement = 1500;

    return Array.from({ length: selectedRange / 2 }, (_, index) => {
      const date = subDays(new Date(), selectedRange - index * 2);
      const areaChartItem: AreaChartItem = {
        date: format(date, 'dd/MM'),
        value: startValue + Math.floor(Math.random() * maxIncrement),
      };

      return areaChartItem;
    });
  }, [selectedRange]);

  useEffect(() => {
    dispatch(fetchVirtualMachines());
  }, []);

  if (pending) {
    return (
      <Box sx={styles.loadingContainer}>
        <CircularProgress sx={styles.loading} />
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems="stretch"
      >
        <Paper sx={styles.stateBlock}>
          <Typography variant="body1" sx={styles.blockTitle} mb="45px">
            State
          </Typography>

          <DonutChart />
        </Paper>

        <Paper sx={styles.trendBlock}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Typography variant="body1" sx={styles.blockTitle}>
              Trend
            </Typography>

            <Select
              value={selectedRange}
              onChange={handleRangeChange}
              variant="standard"
              disableUnderline
              IconComponent={ArrowDownIcon}
              sx={styles.selector}
            >
              <MenuItem value={7}>Last 7 days</MenuItem>
              <MenuItem value={14}>Last 14 days</MenuItem>
            </Select>
          </Box>

          <Box sx={styles.chartContainer}>
            <TrendChart data={trendChartData} />
          </Box>
        </Paper>
      </Stack>

      <VMTable data={virtualMachines} />
    </Box>
  );
}
