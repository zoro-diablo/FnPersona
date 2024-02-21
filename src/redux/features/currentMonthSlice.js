import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  currentMonthIndex: 0,
};

export const currentMonthSlice = createSlice({
  name: 'currentMonth',
  initialState,
  reducers: {
    setCurrentMonthIndex: (state, action) => {
      state.currentMonthIndex = action.payload;
    },
    incrementMonthIndex: (state) => {
      state.currentMonthIndex += 1;
    },
    decrementMonthIndex: (state) => {
      if (state.currentMonthIndex > 0) {
        state.currentMonthIndex -= 1;
      }
    },
  },
});

export const { setCurrentMonthIndex, incrementMonthIndex, decrementMonthIndex } = currentMonthSlice.actions;

export default currentMonthSlice.reducer;
