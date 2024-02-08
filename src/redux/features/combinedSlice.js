import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assetDetails: {
    asset: [{ chargeHead: '', amount: '' }],
    total: 0,
  },
  table: {
    partners: [],
  },
};

export const combinedSlice = createSlice({
  name: 'partnerAssets',
  initialState,
  reducers: {
    // First
    addRow: (state) => {
      state.assetDetails.asset.push({ chargeHead: '', amount: '' });
    },
    removeRow: (state, action) => {
      state.assetDetails.asset.splice(action.payload, 1);
    },
    updateRow: (state, action) => {
      const { index, chargeHead, amount } = action.payload;
      if (chargeHead !== undefined) {
        state.assetDetails.asset[index].chargeHead = chargeHead;
      }
      if (amount !== undefined) {
        state.assetDetails.asset[index].amount = amount;
      }
    },
    setTotal: (state, action) => {
      state.assetDetails.total = action.payload;
    },
      // Second
    addPartner: (state, action) => {
      state.table.partners.push(action.payload);
    },
    removePartner: (state, action) => {
      state.table.partners = state.table.partners.filter(
        (_, index) => index !== action.payload
      );
    },
    updatePartner: (state, action) => {
      const { index, partner } = action.payload;
      state.table.partners[index] = partner;
    },
  },
});

// Export actions and selectors
export const {
  addRow,
  removeRow,
  updateRow,
  setTotal,
  addPartner,
  removePartner,
  updatePartner,
} = combinedSlice.actions;

export const selectRows = (state) => state.partnerAssets.assetDetails.asset;
export const selectTotal = (state) => state.partnerAssets.assetDetails.total;
export const selectPartners = (state) => state.partnerAssets.table.partners;

export default combinedSlice.reducer;
