import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

export const dashboardSelector = (state: RootState) => state.dashboard;

export const dashboardValueSelector = createSelector(
  dashboardSelector,
  (dashboard) => dashboard.value,
);
