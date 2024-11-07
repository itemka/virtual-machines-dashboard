import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  VirtualMachine,
  VirtualMachineFormData,
} from '@/types/virtualMachine.ts';
import { fetchVirtualMachines } from '@/redux/virtualMachines/fetchVirtualMachines.ts';
import { generateRandomAlert } from '@/utils/generateRandomAlert.ts';

interface VirtualMachinesState {
  virtualMachines: {
    data: VirtualMachine[];
    pending: boolean;
    error: string | undefined;
  };
}

const initialState: VirtualMachinesState = {
  virtualMachines: {
    data: [],
    pending: false,
    error: undefined,
  },
};

const virtualMachinesSlice = createSlice({
  name: 'virtualMachines',
  initialState,
  reducers: {
    addVirtualMachine: (
      state,
      action: PayloadAction<VirtualMachineFormData>,
    ) => {
      const newVM: VirtualMachine = {
        id: uuidv4(),
        state: action.payload.virtualizedCpu ? 'Running' : 'Stopped',
        hostServer: '43C07-27',
        cpu: action.payload.cpu,
        memory: action.payload.ram,
        uptime: Date.now(),
        alerts: generateRandomAlert(),
      };

      state.virtualMachines.data = [newVM, ...state.virtualMachines.data];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVirtualMachines.pending, (state) => {
      state.virtualMachines.pending = true;
      state.virtualMachines.error = undefined;
    });
    builder.addCase(fetchVirtualMachines.fulfilled, (state, { payload }) => {
      state.virtualMachines.data = payload.items;
      state.virtualMachines.pending = false;
      state.virtualMachines.error = undefined;
    });
    builder.addCase(fetchVirtualMachines.rejected, (state, { payload }) => {
      state.virtualMachines.pending = false;
      state.virtualMachines.error = payload as string;
    });
  },
});

export const { addVirtualMachine } = virtualMachinesSlice.actions;

export default virtualMachinesSlice.reducer;
