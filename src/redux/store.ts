import { configureStore } from '@reduxjs/toolkit';
import virtualMachinesReducer from '@/redux/virtualMachines/virtualMachinesSlice.ts';

export const store = configureStore({
  reducer: {
    virtualMachines: virtualMachinesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
