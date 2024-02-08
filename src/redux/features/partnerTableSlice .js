
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rows: [{ chargeHead: '', amount: '' }],
};

export const partnerTableSlice = createSlice({
  name: 'partnerTable',
  initialState,
  reducers: {
    addRow: (state) => {
      state.rows.push({ chargeHead: '', amount: '' });
    },
    removeRow: (state, action) => {
      state.rows.splice(action.payload, 1);
    },
    updateRow: (state, action) => {
      const { index, chargeHead, amount } = action.payload;
      if (chargeHead !== undefined) {
        state.rows[index].chargeHead = chargeHead;
      }
      if (amount !== undefined) {
        state.rows[index].amount = amount;
      }
    },
  },
});

export const { addRow, removeRow, updateRow } = partnerTableSlice.actions;

export const selectRows = (state) => state.partnerTable.rows;

export default partnerTableSlice.reducer;
