import { createAsyncThunk } from '@reduxjs/toolkit';
import { VirtualMachine } from '@/types/virtualMachine.ts';
import { mockVirtualMachines } from '@/mocks/virtualMachine.ts';
import { delay } from '@/utils/delay.ts';

interface fetchVirtualMachinesResponse {
  items: VirtualMachine[];
}

export const fetchVirtualMachines = createAsyncThunk<
  fetchVirtualMachinesResponse,
  undefined
>(
  'alertManagement/fetchCustomAlerts',
  async (_payload, { rejectWithValue }) => {
    try {
      await delay(800);

      return { items: mockVirtualMachines };
    } catch (error) {
      console.error('Error during fetching virtual machine', error);

      return rejectWithValue(JSON.stringify(error));
    }
  },
);
