import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  useTheme,
} from '@mui/material';
import ModalIllustration from '@/assets/modal-illustration.svg?react';
import CheckModalStepIcon from '@/assets/checkModalStepIcon.svg?react';
import CheckIndeterminateSmallIcon from '@/assets/check_indeterminate_small.svg?react';
import { useWizardContext } from '@/hooks/useWizardContext.ts';
import styles from './styles.ts';

export function Sidebar() {
  const theme = useTheme();
  const { step } = useWizardContext();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.modalIllustration}>
        <ModalIllustration />
      </Box>

      <Box sx={styles.content}>
        <Typography variant="body1" sx={styles.title}>
          Welcome to the
        </Typography>

        <Typography variant="h2" sx={styles.mainTitle}>
          New Virtual Machine Wizard
        </Typography>

        <Divider sx={styles.divider} />

        <List>
          <ListItem sx={styles.listItem}>
            <ListItemIcon sx={styles.listItemIcon}>
              {step > 1 ? (
                <CheckModalStepIcon />
              ) : (
                <CheckIndeterminateSmallIcon />
              )}
            </ListItemIcon>
            <ListItemText
              primary="Virtual Machine Name"
              primaryTypographyProps={{
                variant: 'body1',
                sx: styles.firstStep(theme)(step),
              }}
            />
          </ListItem>

          <ListItem sx={styles.listItem}>
            {step >= 2 && (
              <ListItemIcon sx={styles.listItemIcon}>
                {step > 2 ? (
                  <CheckModalStepIcon />
                ) : (
                  <CheckIndeterminateSmallIcon />
                )}
              </ListItemIcon>
            )}
            <ListItemText
              primary="General Settings"
              primaryTypographyProps={{
                variant: 'body1',
                sx: styles.secondStep(theme)(step),
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
