import { SyntheticEvent, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Stack, Typography } from '@mui/material';
import ArrowDownIcon from '@/assets/arrowDown.svg?react';
import styles from './styles';

export function NavTabs() {
  const location = useLocation();
  const [tab, setTab] = useState(location.pathname);

  useEffect(() => {
    setTab(location.pathname);
  }, [location.pathname]);

  const handleChange = (_event: SyntheticEvent, newTab: string) => {
    setTab(newTab);
  };

  return (
    <Tabs
      value={tab}
      onChange={handleChange}
      textColor="primary"
      indicatorColor="primary"
      sx={styles.tabs}
    >
      <Tab
        label="Dashboard"
        value="/"
        component={Link}
        to="/"
        sx={styles.tab}
      />
      <Tab
        label="Events"
        value="/events"
        component={Link}
        to="/events"
        sx={styles.tab}
      />
      <Tab
        label={
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography component="span" variant="inherit">
              Help
            </Typography>
            <ArrowDownIcon
              stroke="currentColor"
              strokeWidth={tab === '/help' ? '0.8' : '0.3'}
            />
          </Stack>
        }
        value="/help"
        component={Link}
        to="/help"
        sx={styles.tab}
      />
    </Tabs>
  );
}
