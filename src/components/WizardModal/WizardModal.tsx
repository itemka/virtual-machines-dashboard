import { SyntheticEvent } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import isEqual from 'lodash-es/isEqual';
import { Typography, IconButton, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useWizardContext } from '@/hooks/useWizardContext.ts';
import { useModalState } from '@/hooks/useModalState.ts';
import { SelectName } from './components/steps/SelectName/SelectName.tsx';
import { GeneralSettings } from './components/steps/GeneralSettings/GeneralSettings.tsx';
import { CancelConfirmationModal } from './components/CancelConfirmationModal/CancelConfirmationModal.tsx';
import { Sidebar } from './components/Sidebar/Sidebar.tsx';
import { StepsButtons } from './components/StepsButtons/StepsButtons.tsx';
import { validationSchema } from '@/components/WizardModal/constants.ts';
import CloseIcon from '@/assets/closeModalIcon.svg?react';
import {
  WizardFormData,
  initialFormData,
  steps,
} from '@/contexts/WizardContext.tsx';
import { ReadyToComplete } from './components/steps/ReadyToComplete/ReadyToComplete.tsx';
import styles from './styles.ts';

interface WizardModalProps {
  open: boolean;
  onClose: () => void;
}

export type FormikPropsWithoutHandleSubmit = Omit<
  FormikProps<WizardFormData>,
  'handleSubmit'
>;

export function WizardModal({ open, onClose }: WizardModalProps) {
  const { step, setStep, nextStep, formData, updateFormData } =
    useWizardContext();

  const {
    isModalOpen: isCancelCreatingModalOpen,
    closeModal: onCancelCreatingModalClose,
    openModal: onCancelCreatingModalOpen,
  } = useModalState();

  const handleModalCloseIconClick = () => {
    if (!isEqual(initialFormData, formData)) {
      onCancelCreatingModalOpen();
    } else {
      onClose();
      setStep(steps.STEP_ONE);
    }
  };

  const handleModalClose = (
    _event: SyntheticEvent,
    reason: 'backdropClick' | 'escapeKeyDown',
  ) => {
    if (reason === 'backdropClick') {
      return;
    }

    handleModalCloseIconClick();
  };

  const onFinish = () => {
    onClose();
    setStep(steps.STEP_ONE);
    updateFormData(initialFormData);
  };

  const confirmCancel = () => {
    onCancelCreatingModalClose();
    onClose();
    setStep(steps.STEP_ONE);
    updateFormData(initialFormData);
  };

  const renderStep = (formikProps: FormikPropsWithoutHandleSubmit) => {
    switch (step) {
      case steps.STEP_ONE:
        return <SelectName formikProps={formikProps} />;
      case steps.STEP_TWO:
        return <GeneralSettings formikProps={formikProps} />;
      case steps.STEP_THREE:
        return <ReadyToComplete formikProps={formikProps} />;
      default:
        return null;
    }
  };

  return (
    <Modal open={open} onClose={handleModalClose}>
      <Box sx={styles.container}>
        <Box sx={styles.content}>
          <Box sx={styles.header}>
            <Typography variant="body2" sx={styles.headerText}>
              New virtual machine
            </Typography>

            <IconButton
              onClick={handleModalCloseIconClick}
              sx={styles.headerCloseIcon}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={styles.body}>
            <Sidebar />

            <Formik
              initialValues={formData}
              validationSchema={validationSchema}
              validateOnChange
              validateOnBlur
              onSubmit={nextStep}
            >
              {({ handleSubmit, ...restFormikProps }) => (
                <Form className="formikForm" onSubmit={handleSubmit}>
                  <Box sx={styles.bodyContent}>
                    <Box sx={styles.stepContainer}>
                      {renderStep(restFormikProps)}
                    </Box>

                    <Box sx={styles.stepsButtonsContainer}>
                      <StepsButtons
                        onFinish={onFinish}
                        formikProps={restFormikProps}
                      />
                    </Box>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>

          <CancelConfirmationModal
            open={isCancelCreatingModalOpen}
            onLeave={confirmCancel}
            onCancel={onCancelCreatingModalClose}
          />
        </Box>
      </Box>
    </Modal>
  );
}
