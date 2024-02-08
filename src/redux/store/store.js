import { configureStore } from '@reduxjs/toolkit';
import combinedReducer from '../features/combinedSlice';

export const store = configureStore({
  reducer: {

    partnerAssets: combinedReducer,
  },
});
