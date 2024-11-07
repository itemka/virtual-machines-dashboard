import { ReactNode } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import AddIcon from '@/assets/plusIcon.svg?react';
import { WizardProvider } from '@/contexts/WizardContext.tsx';
import { WizardModal } from '@/components/WizardModal/WizardModal.tsx';
import { useModalState } from '@/hooks/useModalState.ts';
import styles from './styles.ts';

interface VMTableContainerProps {
  children: ReactNode;
  virtualMachineCount: number;
}

export function VMTableContainer({
  children,
  virtualMachineCount,
}: VMTableContainerProps) {
  const { isModalOpen, openModal, closeModal } = useModalState();

  return (
    <Paper sx={styles.vmBlock}>
      <Box sx={styles.headerContainer}>
        <Box display="flex" alignItems="center">
          <Typography variant="h1" mr="10px">
            Virtual machines
          </Typography>

          <Box sx={styles.amountContainer}>
            <Typography variant="body2" sx={styles.amount}>
              {virtualMachineCount}
            </Typography>
          </Box>
        </Box>

        <WizardProvider>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={openModal}
            sx={styles.button}
          >
            <Typography variant="button" textTransform="none">
              New
            </Typography>
          </Button>
          <WizardModal open={isModalOpen} onClose={closeModal} />
        </WizardProvider>
      </Box>

      {children}
    </Paper>
  );
}
