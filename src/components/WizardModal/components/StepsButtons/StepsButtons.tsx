import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useWizardContext } from '@/hooks/useWizardContext.ts';
import { steps } from '@/contexts/WizardContext.tsx';
import { FormikPropsWithoutHandleSubmit } from '@/components/WizardModal/WizardModal.tsx';
import { VirtualMachineFormData } from '@/types/virtualMachine.ts';
import styles from './styles.ts';

interface StepsButtonsProps {
  onFinish: () => void;
  formikProps: FormikPropsWithoutHandleSubmit;
}

export function StepsButtons({ onFinish, formikProps }: StepsButtonsProps) {
  const { step, nextStep, previousStep } = useWizardContext();
  const [isStepValid, setIsStepValid] = useState(formikProps.isValid);

  useEffect(() => {
    const validateStep = async () => {
      let fieldsToValidate: Array<keyof VirtualMachineFormData> = [];

      switch (step) {
        case steps.STEP_ONE:
          fieldsToValidate = ['vmName'];
          break;
        case steps.STEP_TWO:
          fieldsToValidate = ['cpu', 'ram'];
          break;
        default:
          fieldsToValidate = [];
          break;
      }

      const errors = await formikProps.validateForm();

      const stepErrors = fieldsToValidate.some((field) => errors[field]);

      setIsStepValid(!stepErrors);
    };

    validateStep();
  }, [step, formikProps.values]);

  return (
    <Box sx={styles.container}>
      {step > steps.STEP_ONE && (
        <Button
          variant="contained"
          onClick={previousStep}
          sx={styles.backButton}
        >
          Back
        </Button>
      )}

      {step < steps.STEP_THREE && (
        <Button
          variant="contained"
          onClick={nextStep}
          disabled={!isStepValid}
          sx={styles.nextButton}
        >
          Next
        </Button>
      )}

      {step === steps.STEP_THREE && (
        <Button
          variant="contained"
          color="primary"
          onClick={onFinish}
          sx={styles.createButton}
        >
          Create
        </Button>
      )}
    </Box>
  );
}
