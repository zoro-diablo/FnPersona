import { configureStore } from '@reduxjs/toolkit';
import combinedReducer from '../features/combinedSlice';
import partnerReducer from '../features/partnerSlice';

export const store = configureStore({
  reducer: {
    partnerAssets: combinedReducer,
    partner: partnerReducer,
  },
});
