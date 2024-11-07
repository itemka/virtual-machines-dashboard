import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LogoIcon from '@/assets/logo.svg?react';
import NotificationsIcon from '@/assets/notifications.svg?react';
import { NavTabs } from '../NavTabs/NavTabs.tsx';
import styles from './styles';

export function Header() {
  return (
    <>
      <AppBar component="nav" sx={styles.nav}>
        <Toolbar sx={styles.toolbar}>
          <Box component={Link} to="/" sx={styles.logo}>
            <LogoIcon />
          </Box>

          <Box sx={styles.tabs}>
            <NavTabs />
          </Box>

          <Box sx={styles.avatarContainer}>
            <NotificationsIcon />
            <Avatar sx={styles.avatar} alt="Avatar" src="/images/avatar.png" />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
