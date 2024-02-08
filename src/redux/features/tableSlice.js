import { createSlice } from '@reduxjs/toolkit';

export const tableSlice = createSlice({
  name: 'table',
  initialState: {
    total: 0,
  },
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setTotal } = tableSlice.actions;

export const selectTotal = (state) => state.table.total;

export default tableSlice.reducer;
