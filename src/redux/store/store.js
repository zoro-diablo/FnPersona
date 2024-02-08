import { configureStore } from '@reduxjs/toolkit';
import tableReducer from '../features/tableSlice'
import partnerTableReducer from '../features/partnerTableSlice '

export const store = configureStore({
  reducer: {
    table: tableReducer,
    partnerTable: partnerTableReducer,
  },
});
