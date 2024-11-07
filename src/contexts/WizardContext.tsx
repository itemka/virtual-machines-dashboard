import { createContext, useState, ReactNode } from 'react';
import { VirtualMachineFormData } from '@/types/virtualMachine.ts';

export const steps = {
  STEP_ONE: 1,
  STEP_TWO: 2,
  STEP_THREE: 3,
} as const;

interface WizardContextType {
  step: number;
  setStep: (step: number) => void;
  formData: VirtualMachineFormData;
  updateFormData: (data: Partial<VirtualMachineFormData>) => void;
  nextStep: () => void;
  previousStep: () => void;
}

export const initialFormData: VirtualMachineFormData = {
  vmName: '',
  cpu: 0,
  ram: 0,
  virtualizedCpu: false,
};

export const WizardContext = createContext<WizardContextType | undefined>(
  undefined,
);

interface WizardProviderProps {
  children: ReactNode;
}

export function WizardProvider({ children }: WizardProviderProps) {
  const [step, setStep] = useState<number>(steps.STEP_ONE);
  const [formData, setFormData] =
    useState<VirtualMachineFormData>(initialFormData);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, steps.STEP_THREE));
  };

  const previousStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, steps.STEP_ONE));
  };

  const updateFormData = (data: Partial<VirtualMachineFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <WizardContext.Provider
      value={{
        step,
        setStep,
        formData,
        updateFormData,
        nextStep,
        previousStep,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}
