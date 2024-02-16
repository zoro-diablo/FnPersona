import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableDataEx: [
    {
      month: 'Nov-23',
      data: [
        {
          id: 1,
          expenseType: 'Security',
          expense: 2000,
        },
        {
          id: 2,
          expenseType: 'Nakheel Service Fee',
          expense: 200,
        },
        {
          id: 3,
          expenseType: 'cleaning guy',
          expense: 500,
        },
      ],
      total: 2700,
    },
    {
      month: 'Dec-23',
      data: [
        {
          id: 1,
          expenseType: 'bank loan installment',
          expense: 1500,
        },
        {
          id: 2,
          expenseType: 'Du internet bill',
          expense: 200,
        },
        {
          id: 3,
          expenseType: 'Dewa bill',
          expense: 3000,
        },
      ],
      total: 4700,
    },
    {
      month: 'Jan-23',
      data: [
        {
          id: 1,
          expenseType: 'Empower bill',
          expense: 400,
        },
        {
          id: 2,       
          expenseType: 'Maintenance',
          expense: 500,
        },
        {
          id: 3,    
          expenseType: 'Gas Bill',
          expense: 2000,
        },
      ],
      total: 2900,
    },
  ],
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addRowEx: (state, action) => {
      const { monthIndex, newRow } = action.payload;
      state.tableDataEx[monthIndex].data.push(newRow);
      // Update to calculate the sum of expenses
      state.tableDataEx[monthIndex].total = state.tableDataEx[
        monthIndex
      ].data.reduce((total, item) => total + item.expense, 0);
    },
    editDataEx: (state, action) => {
      const { monthIndex, dataIndex, newData } = action.payload;
      const monthData = state.tableDataEx[monthIndex].data;
      const itemIndex = monthData.findIndex((item) => item.id === dataIndex);
      if (itemIndex !== -1) {
        monthData[itemIndex] = { ...monthData[itemIndex], ...newData };
        state.tableDataEx[monthIndex].total = monthData.reduce(
          (total, item) => total + item.expense,
          0
        );
      }
    },
    deleteRowEx: (state, action) => {
      const { monthIndex, rowId } = action.payload;
      const monthData = state.tableDataEx[monthIndex].data;
      const filteredData = monthData.filter((item) => item.id !== rowId);
      state.tableDataEx[monthIndex].data = filteredData;
      state.tableDataEx[monthIndex].total = filteredData.reduce(
        (total, item) => total + item.expense,
        0
      );
    },
  },
});

export const { deleteRowEx, editDataEx, addRowEx } = expenseSlice.actions;

export default expenseSlice.reducer;
