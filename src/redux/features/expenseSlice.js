import { createSlice } from '@reduxjs/toolkit';
import { addMonth } from './partnerSlice';

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
  ],
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addRowEx: (state, action) => {
      const { monthIndex, newRow } = action.payload;
      state.tableDataEx[monthIndex].data.push(newRow);
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
  extraReducers: (builder) => {
    builder.addCase(addMonth, (state, action) => {
      const lastMonthDataEx = state.tableDataEx[
        state.tableDataEx.length - 1
      ].data.map((item) => ({
        ...item,
        id: Date.now() + Math.random(),
      }));
      const newMonth = {
        month: action.payload.monthName,
        data: [...lastMonthDataEx],
        total: lastMonthDataEx.reduce((total, item) => total + item.expense, 0),
      };
      state.tableDataEx.push(newMonth);
    });
  },
});

export const { deleteRowEx, editDataEx, addRowEx } = expenseSlice.actions;

export default expenseSlice.reducer;
