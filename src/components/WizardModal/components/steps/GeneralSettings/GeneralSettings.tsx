import { Checkbox, FormControlLabel } from '@mui/material';
import { useWizardContext } from '@/hooks/useWizardContext.ts';
import { ChangeEvent, useEffect } from 'react';
import { StepWrapper } from '@/components/WizardModal/components/StepWrapper/StepWrapper.tsx';
import { FormikPropsWithoutHandleSubmit } from '@/components/WizardModal/WizardModal.tsx';
import { NumericInput } from '@/components/WizardModal/components/steps/GeneralSettings/components/NumericInput/NumericInput.tsx';
import { RamSliderWithIndicator } from '@/components/WizardModal/components/steps/GeneralSettings/components/RamSliderWithIndicator/RamSliderWithIndicator.tsx';
import styles from './styles';

interface GeneralSettingsProps {
  formikProps: FormikPropsWithoutHandleSubmit;
}

export function GeneralSettings({ formikProps }: GeneralSettingsProps) {
  const cpuError = formikProps.touched.cpu && Boolean(formikProps.errors.cpu);
  const ramError = formikProps.touched.ram && Boolean(formikProps.errors.ram);

  const { updateFormData } = useWizardContext();

  const incrementValue = (name: 'cpu' | 'ram') => () => {
    const newValue = (+formikProps.values[name] || 0) + 1;

    formikProps.setFieldValue(name, newValue);
    updateFormData({ [name]: newValue });
  };

  const decrementValue = (name: 'cpu' | 'ram') => () => {
    const newValue =
      +formikProps.values[name] < 1 ? 0 : (+formikProps.values[name] || 0) - 1;

    formikProps.setFieldValue(name, newValue);
    updateFormData({ [name]: newValue });
  };

  const handleNumericChange =
    (name: 'cpu' | 'ram') => (event: ChangeEvent<HTMLInputElement>) => {
      const valueWithoutNonNumericCharacters = event.target.value.replace(
        /\D/g,
        '',
      );

      formikProps.setFieldValue(name, valueWithoutNonNumericCharacters);
      updateFormData({
        [name]: valueWithoutNonNumericCharacters
          ? +valueWithoutNonNumericCharacters
          : 0,
      });
    };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    formikProps.setFieldValue('virtualizedCpu', isChecked);
    updateFormData({ virtualizedCpu: isChecked });
  };

  useEffect(() => {
    if (formikProps.values.cpu > 0 && !formikProps.touched.cpu) {
      // mark it as touched after initial value to show error on first type for cpu
      formikProps.setFieldTouched('cpu', true, true);
    }
  }, [formikProps.values.cpu]);

  useEffect(() => {
    if (formikProps.values.ram > 0 && !formikProps.touched.ram) {
      // mark it as touched after initial value to show error on first type for ram
      formikProps.setFieldTouched('ram', true, true);
    }
  }, [formikProps.values.ram]);

  return (
    <StepWrapper
      title="General Settings"
      description="Configure the virtual machine hardware."
    >
      <NumericInput
        name="cpu"
        label="CPU"
        value={formikProps.values.cpu}
        suffix="/ 12"
        suffixBufferSpace={30}
        error={cpuError}
        errorMessage={formikProps.errors.cpu}
        buttonLabel="Enter number of processors up to 12"
        onIncrement={incrementValue('cpu')}
        onDecrement={decrementValue('cpu')}
        onChange={handleNumericChange('cpu')}
        containerSx={{ mb: '10px' }}
      />

      <FormControlLabel
        label="Enable virtualized CPU performance counters"
        sx={styles.formControlLabel}
        control={
          <Checkbox
            checked={formikProps.values.virtualizedCpu}
            onChange={handleCheckboxChange}
            color="primary"
            sx={styles.checkbox}
          />
        }
      />

      <NumericInput
        name="ram"
        label="RAM"
        value={formikProps.values.ram}
        suffix="/ 50 GB"
        suffixBufferSpace={60}
        error={ramError}
        errorMessage={formikProps.errors.ram}
        buttonLabel="Enter memory amount up to 50GB"
        onIncrement={incrementValue('ram')}
        onDecrement={decrementValue('ram')}
        onChange={handleNumericChange('ram')}
        containerSx={{ mb: '30px' }}
      />

      <RamSliderWithIndicator value={+formikProps.values.ram} />
    </StepWrapper>
  );
}
