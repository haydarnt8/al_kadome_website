import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProdutData: (state, action) => {
      // state.data = action.payload;
      state.data = [...state.data, ...action.payload];
    },
    resetProducts: (state) => {
      state.data = [];
    },
  },
});

export const { setProdutData, resetProducts } = productSlice.actions;
export default productSlice.reducer;
