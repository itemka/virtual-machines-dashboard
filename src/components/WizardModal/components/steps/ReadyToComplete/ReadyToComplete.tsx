import { Box, Divider, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { StepWrapper } from '@/components/WizardModal/components/StepWrapper/StepWrapper.tsx';
import { FormikPropsWithoutHandleSubmit } from '@/components/WizardModal/WizardModal.tsx';
import styles from './styles.ts';

interface ReadyToCompleteProps {
  formikProps: FormikPropsWithoutHandleSubmit;
}

export function ReadyToComplete({ formikProps }: ReadyToCompleteProps) {
  return (
    <StepWrapper
      title="Ready to complete"
      description="Review your settings selection before finishing the wizard."
    >
      <Box sx={styles.container}>
        <Box sx={styles.lineContainer}>
          <Typography variant="body2" sx={styles.lineTitle}>
            Name
          </Typography>
          <Typography variant="body2">{formikProps.values.vmName}</Typography>
        </Box>

        <Divider sx={styles.divider} />

        <Box sx={styles.lineContainer}>
          <Typography variant="body2" sx={styles.lineTitle}>
            CPU
          </Typography>
          <Typography variant="body2">{formikProps.values.cpu}</Typography>
        </Box>

        <Divider sx={styles.divider} />

        <Box sx={styles.lineContainer}>
          <Typography variant="body2" sx={styles.lineTitle}>
            RAM
          </Typography>
          <Typography variant="body2">{formikProps.values.ram} GB</Typography>
        </Box>

        <Divider sx={styles.divider} />

        <Box sx={styles.editIconContainer}>
          <EditIcon />
        </Box>
      </Box>
    </StepWrapper>
  );
}
