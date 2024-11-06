import * as Yup from 'yup';

export const validationSchema = Yup.object({
  vmName: Yup.string().max(80, 'Name is too long').required('Name is required'),
  cpu: Yup.number()
    .min(1, 'Number of processors must be at least 1')
    .max(12, 'Number of processors must be up to 12')
    .required('CPU is required'),
  ram: Yup.number()
    .min(1, 'Memory must be at least 1 GB')
    .max(50, 'Enter memory amount up to 50GB')
    .required('Ram is required'),
  virtualizedCpu: Yup.boolean(),
});
