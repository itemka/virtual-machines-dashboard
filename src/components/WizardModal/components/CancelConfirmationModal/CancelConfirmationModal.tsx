import { SyntheticEvent } from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button, Typography } from '@mui/material';
import ErrorInfoIcon from '@/assets/redInfoIcon.svg?react';
import styles from './styles.ts';

interface CancelConfirmationModalProps {
  open: boolean;
  onLeave: () => void;
  onCancel: () => void;
}

export function CancelConfirmationModal({
  open,
  onLeave,
  onCancel,
}: CancelConfirmationModalProps) {
  const handleClose = (
    _event: SyntheticEvent,
    reason: 'backdropClick' | 'escapeKeyDown',
  ) => {
    if (reason === 'backdropClick') {
      return;
    }

    onLeave();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.container}>
        <Box sx={styles.errorInfoIcon}>
          <ErrorInfoIcon />
        </Box>

        <Typography variant="h6" sx={styles.title}>
          Cancel creating?
        </Typography>

        <Typography variant="body2" sx={styles.description}>
          You have unsaved changes that will be lost. Do you want to continue?
        </Typography>

        <Box sx={styles.buttonContainer}>
          <Button onClick={onLeave} variant="contained" sx={styles.leaveButton}>
            Leave
          </Button>

          <Button onClick={onCancel} variant="text" sx={styles.cancelButton}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
