import { ReactElement } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Chip,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import TableIdIcon from '@/assets/tableIdIcon.svg?react';
import TwoArrowsIcon from '@/assets/arrows.svg?react';
import WarningOrangeIcon from '@/assets/warningOrange.svg?react';
import WarningRedIcon from '@/assets/warningRed.svg?react';
import WarningYellowIcon from '@/assets/warningYellow.svg?react';
import OkIcon from '@/assets/ok.svg?react';
import { VMTableContainer } from '@/components/Dashboard/VMTable/VMTableContainer.tsx';
import { formatTimestamp } from '@/components/Dashboard/VMTable/helpers/formatTimestamp.ts';
import { AlertLevel, VirtualMachine } from '@/types/virtualMachine.ts';
import styles from './styles.ts';

const alertIconByLevel: Record<AlertLevel, ReactElement> = {
  [AlertLevel.Critical]: <WarningRedIcon />,
  [AlertLevel.Important]: <WarningOrangeIcon />,
  [AlertLevel.Moderate]: <WarningYellowIcon />,
  [AlertLevel.Good]: <OkIcon />,
};

interface VMTableProps {
  data: VirtualMachine[];
}

export function VMTable({ data }: VMTableProps) {
  const theme = useTheme();

  return (
    <VMTableContainer virtualMachineCount={data.length}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={styles.headTableRow}>
              <TableCell>ID</TableCell>
              <TableCell>
                State <TwoArrowsIcon />
              </TableCell>
              <TableCell>Host Server</TableCell>
              <TableCell>
                CPU <TwoArrowsIcon />
              </TableCell>
              <TableCell>
                Memory <TwoArrowsIcon />
              </TableCell>
              <TableCell>
                Uptime <TwoArrowsIcon />
              </TableCell>
              <TableCell>Alerts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={styles.bodyTableRow}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box width="16px" height="16px" mr="5px">
                      <TableIdIcon />
                    </Box>

                    <Typography sx={styles.id}>{row.id}</Typography>
                  </Box>
                </TableCell>

                <TableCell>
                  <Chip
                    label={row.state}
                    sx={styles.state(theme)(row.state)}
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  <Typography variant="body2">{row.hostServer}</Typography>
                </TableCell>

                <TableCell>
                  <Typography
                    variant="body2"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    {row.cpu} CPU
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={(row.cpu / 10) * 100}
                    sx={styles.cpuAndGibChart}
                  />
                </TableCell>

                <TableCell>
                  <Typography
                    variant="body2"
                    display="flex"
                    alignItems="center"
                  >
                    {row.memory} GiB
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={(row.memory / 50) * 100}
                    sx={styles.cpuAndGibChart}
                  />
                </TableCell>

                <TableCell>
                  <Typography variant="body2">
                    {formatTimestamp(row.uptime)}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Box display="flex" alignItems="center">
                    {alertIconByLevel[row.alerts.level]}

                    <Box display="flex" ml="5px">
                      {row.alerts.count && (
                        <Typography variant="body2" fontWeight={600} mr={'5px'}>
                          {row.alerts.count}
                        </Typography>
                      )}

                      <Typography variant="body2">
                        {row.alerts.level}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </VMTableContainer>
  );
}
