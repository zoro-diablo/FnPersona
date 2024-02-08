import { createSlice } from '@reduxjs/toolkit';

export const tableSlice = createSlice({
  name: 'table',
  initialState: {
    total: 0,
    partners: [], 
  },
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    addPartner: (state, action) => {
      state.partners.push(action.payload); 
    },
    removePartner: (state, action) => {
      state.partners = state.partners.filter((_, index) => index !== action.payload); 
    },
    updatePartner: (state, action) => {
      const { index, partner } = action.payload;
      state.partners[index] = partner; 
    },
  },
});

export const { setTotal, addPartner, removePartner, updatePartner } = tableSlice.actions;

export const selectTotal = (state) => state.table.total;
export const selectPartners = (state) => state.table.partners;

export default tableSlice.reducer;
