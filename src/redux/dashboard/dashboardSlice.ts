import { createSlice } from '@reduxjs/toolkit';

interface DashboardState {
  value: number;
}

export const initialState: DashboardState = {
  value: 0,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = dashboardSlice.actions;

export default dashboardSlice.reducer;
