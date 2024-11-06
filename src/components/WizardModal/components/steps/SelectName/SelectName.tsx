import { ChangeEvent, useEffect } from 'react';
import { Field } from 'formik';
import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useWizardContext } from '@/hooks/useWizardContext.ts';
import ErrorInfoIcon from '@/assets/redInfoIcon.svg?react';
import { FormikPropsWithoutHandleSubmit } from '@/components/WizardModal/WizardModal.tsx';
import { StepWrapper } from '@/components/WizardModal/components/StepWrapper/StepWrapper.tsx';
import styles from './styles.ts';

interface SelectNameProps {
  formikProps: FormikPropsWithoutHandleSubmit;
}

export function SelectName({ formikProps }: SelectNameProps) {
  const { updateFormData } = useWizardContext();
  const theme = useTheme();

  const error =
    formikProps.touched.vmName && Boolean(formikProps.errors.vmName);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    formikProps.handleChange(event);
    updateFormData({ vmName: event.target.value });
  };

  useEffect(() => {
    if (formikProps.values.vmName.length > 0 && !formikProps.touched.vmName) {
      // mark it as touched after first type to show "80 characters" error on first type
      formikProps.setFieldTouched('vmName', true, true);
    }
  }, [formikProps.values.vmName]);

  return (
    <StepWrapper
      title="Select a name"
      description="A virtual machine requires storage so that you can install an operating system."
    >
      <Box sx={styles.container(theme)(error)}>
        <Field
          name="vmName"
          as={TextField}
          label="Name"
          fullWidth
          error={error}
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            endAdornment: error ? (
              <InputAdornment position="end">
                <ErrorInfoIcon />
              </InputAdornment>
            ) : null,
          }}
        />
        {error ? (
          <Typography variant="caption" color="error">
            {formikProps.errors.vmName}
          </Typography>
        ) : (
          <Typography variant="caption" color="textSecondary">
            Enter unique name up to 80 characters
          </Typography>
        )}
      </Box>
    </StepWrapper>
  );
}
