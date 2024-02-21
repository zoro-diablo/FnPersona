import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableData: [
    {
      month: 'NOV - 23',
      data: [
        {
          id: 1,
          name: 'Macron',
          income: 2000,
        },
        {
          id: 2,
          name: 'Jimmy',
          income: 900,
        },
        {
          id: 3,
          name: 'Lokeo',
          income: 200,
        },
      ],
      total: 3100,
    },
    {
      month: 'DEC - 23',
      data: [
        {
          id: 1,
          name: 'Macron',
          income: 1800,
        },
        {
          id: 2,
          name: 'Jimmy',
          income: 1200,
        },
        {
          id: 3,
          name: 'Lokeo',
          income: 1500,
        },
      ],
      total: 4500,
    },
    {
      month: 'JAN - 23',
      data: [
        {
          id: 1,
          name: 'Macron',
          income: 1200,
        },
        {
          id: 2,
          name: 'Jimmy',
          income: 160,
        },
        {
          id: 3,
          name: 'Lokeo',
          income: 1000,
        },
      ],
      total: 2360,
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
      ].data.reduce((total, item) => total + item.income, 0);
    },
    editData: (state, action) => {
      const { monthIndex, dataIndex, newData } = action.payload;
      const monthData = state.tableData[monthIndex].data;
      const itemIndex = monthData.findIndex((item) => item.id === dataIndex);
      if (itemIndex !== -1) {
        monthData[itemIndex] = { ...monthData[itemIndex], ...newData };
        state.tableData[monthIndex].total = monthData.reduce(
          (total, item) => total + item.income,
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
        (total, item) => total + item.income,
        0
      );
    },
    addMonth: (state, action) => {
      const { monthName } = action.payload;
      const lastMonthData = state.tableData[
        state.tableData.length - 1
      ].data.map((item) => ({
        ...item,
        id: Date.now() + Math.random(),
      }));
      const newMonth = {
        month: monthName,
        data: [...lastMonthData],
        total: lastMonthData.reduce((total, item) => total + item.income, 0),
      };
      state.tableData.push(newMonth);
    },
  },
});

export const { editData, deleteRow, addRow, addMonth } = partnerSlice.actions;

export default partnerSlice.reducer;
