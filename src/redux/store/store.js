import { configureStore } from '@reduxjs/toolkit';
import combinedReducer from '../features/combinedSlice';
import partnerReducer from '../features/partnerSlice';
import expenseReducer from '../features/expenseSlice';
import currentMonthReducer from '../features/currentMonthSlice';

export const store = configureStore({
  reducer: {
    partnerAssets: combinedReducer,
    partner: partnerReducer,
    expense: expenseReducer,
    currentMonth: currentMonthReducer,
  },
});
