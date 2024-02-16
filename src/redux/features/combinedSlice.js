import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assetDetails: {
    asset: [{ chargeHead: '', amount: '' }],
    total: 0,
  },
  table: {
    partners: [{ name: '', income: ''}],
  },
  remainingValueError: false,
};

export const combinedSlice = createSlice({
  name: 'partnerAssets',
  initialState,
  reducers: {
    addRow: (state) => {
      state.assetDetails.asset.push({
        chargeHead: '',
        amount: '',
        remarks: '',
      });
    },
    removeRow: (state, action) => {
      state.assetDetails.asset.splice(action.payload, 1);
    },
    updateRemark: (state, action) => {
      const { index, remark } = action.payload;
      state.assetDetails.asset[index].remarks = remark;
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
    addPartner: (state, action) => {
      state.table.partners.push({ ...action.payload, date: '' }); 
    },
    removePartner: (state, action) => {
      state.table.partners = state.table.partners.filter(
        (_, index) => index !== action.payload
      );
    },
    updatePartner: (state, action) => {
      const { index, partner } = action.payload;
      state.table.partners[index] = { ...state.table.partners[index], ...partner };
    },
    setRemainingValueError: (state, action) => {
      state.remainingValueError = action.payload;
    },
    updatePartnerDate: (state, action) => { 
      const { index, date } = action.payload;
      state.table.partners[index].date = date;
    },
    
  },
});

export const {
  addRow,
  updateRemark,
  removeRow,
  updateRow,
  setTotal,
  addPartner,
  removePartner,
  updatePartner,
  setRemainingValueError,
  updatePartnerDate
} = combinedSlice.actions;

export const selectRows = (state) => state.partnerAssets.assetDetails.asset;
export const selectTotal = (state) => state.partnerAssets.assetDetails.total;
export const selectPartners = (state) => state.partnerAssets.table.partners;
export const selectRemainingValueError = (state) =>
  state.partnerAssets.remainingValueError;

export default combinedSlice.reducer;
