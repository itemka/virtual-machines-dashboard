import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

export const virtualMachinesStateSelector = (state: RootState) =>
  state.virtualMachines;

export const virtualMachinesSelector = createSelector(
  virtualMachinesStateSelector,
  (virtualMachines) => virtualMachines.virtualMachines,
);
