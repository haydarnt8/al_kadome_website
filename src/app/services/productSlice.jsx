import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProdutData: (state, action) => {
      state.data = action.payload;
      // state.data = [...state.data, ...action.payload];
    },
  },
});

export const { setProdutData } = productSlice.actions;
export default productSlice.reducer;
