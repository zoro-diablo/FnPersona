import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assetDetails: {
    asset: [{ chargeHead: '', amount: '' }],
    total: 0,
  },
  table: {
    partners: [{ name: '', income: '' }],
  },
  remainingValueError: false,
  profit: {
    result: 0,
    total: 0,
    partners: [{ name: '', income: '', profitValue: '' }],
  },
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
      state.profit.total = action.payload;
    },
    addPartner: (state, action) => {
      const newPartner = { ...action.payload, date: '' };
      const totalIncome = state.assetDetails.total;
      const profitShare =
        state.profit.result * ((newPartner.income / totalIncome) * 100);

      state.table.partners.push(newPartner);

      const partnerWithProfit = {
        ...newPartner,
        profitValue: profitShare,
      };

      state.profit.partners.push(partnerWithProfit);
    },

    removePartner: (state, action) => {
      state.table.partners = state.table.partners.filter(
        (_, index) => index !== action.payload
      );
      state.profit.partners = state.profit.partners.filter(
        (_, index) => index !== action.payload
      );
    },

    updatePartner: (state, action) => {
      const { index, partner } = action.payload;
      state.table.partners[index] = {
        ...state.table.partners[index],
        ...partner,
      };

      const updatedPartner = {
        ...state.profit.partners[index],
        ...partner,
      };

      const totalIncome = state.assetDetails.total;
      const profitShare =
        state.profit.result * ((updatedPartner.income / totalIncome) * 100);

      updatedPartner.profitValue = profitShare;

      state.profit.partners[index] = updatedPartner;
    },

    setRemainingValueError: (state, action) => {
      state.remainingValueError = action.payload;
    },
    updatePartnerDate: (state, action) => {
      const { index, date } = action.payload;
      state.table.partners[index].date = date;
    },

    calculateAndUpdateProfits: (state, action) => {
      const { result } = action.payload;
      state.profit.result = result;
      const totalIncome = state.assetDetails.total;
      state.profit.partners = state.profit.partners.map((partner) => {
        const profitShare = result * ((partner.income / totalIncome) * 100);
        return {
          ...partner,
          profitValue: profitShare,
        };
      });
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
  updatePartnerDate,
  calculateAndUpdateProfits,
} = combinedSlice.actions;

export const selectRows = (state) => state.partnerAssets.assetDetails.asset;
export const selectTotal = (state) => state.partnerAssets.assetDetails.total;
export const selectPartners = (state) => state.partnerAssets.table.partners;
export const selectRemainingValueError = (state) =>
  state.partnerAssets.remainingValueError;
export const selectProfitDetails = (state) => state.partnerAssets.profit;

export default combinedSlice.reducer;
