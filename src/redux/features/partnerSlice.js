import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableData: [
    {
      month: 'Nov-23',
      data: [
        { id: 1, name: 'Macron', amount: 2000 },
        { id: 2, name: 'Jimmy', amount: 900 },
        { id: 3, name: 'Lokeo', amount: 200 },
      ],
      total: 3100,
    },
    {
      month: 'Dec-23',
      data: [
        { id: 1, name: 'John', amount: 1800 },
        { id: 2, name: 'Alice', amount: 1200 },
        { id: 3, name: 'Bob', amount: 1500 },
      ],
      total: 4500,
    },
    {
      month: 'Jan-23',
      data: [
        { id: 1, name: 'John', amount: 100 },
        { id: 2, name: 'Alice', amount: 100 },
        { id: 3, name: 'Bob', amount: 100 },
      ],
      total: 300,
    },
    {
      month: 'Feb-23',
      data: [
        { id: 1, name: 'John', amount: 100 },
        { id: 2, name: 'Alice', amount: 120 },
        { id: 3, name: 'Bob', amount: 500 },
      ],
      total: 720,
    },
  ],
};

export const partnerSlice = createSlice({
  name: 'partner',
  initialState,
  reducers: {
    addRow: (state, action) => {
      const { monthIndex, newRow } = action.payload;
      state.tableData[monthIndex].data.push(newRow);
      state.tableData[monthIndex].total = state.tableData[
        monthIndex
      ].data.reduce((total, item) => total + item.amount, 0);
    },
    editData: (state, action) => {
      const { monthIndex, dataIndex, newData } = action.payload;
      const monthData = state.tableData[monthIndex].data;
      const itemIndex = monthData.findIndex((item) => item.id === dataIndex);
      if (itemIndex !== -1) {
        monthData[itemIndex] = { ...monthData[itemIndex], ...newData };
        state.tableData[monthIndex].total = monthData.reduce(
          (total, item) => total + item.amount,
          0
        );
      }
    },
    deleteRow: (state, action) => {
      const { monthIndex, rowId } = action.payload;
      const monthData = state.tableData[monthIndex].data;
      const filteredData = monthData.filter((item) => item.id !== rowId);
      state.tableData[monthIndex].data = filteredData;
      state.tableData[monthIndex].total = filteredData.reduce(
        (total, item) => total + item.amount,
        0
      );
    },
    addMonth: (state, action) => {
      const { monthName } = action.payload;
      const newMonth = {
        month: monthName,
        data: [],
        total: 0,
      };
      state.tableData.push(newMonth);
    },
  },
});

export const { editData, deleteRow, addRow, addMonth } = partnerSlice.actions;

export default partnerSlice.reducer;
