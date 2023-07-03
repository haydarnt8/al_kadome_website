import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const pokemonSlice = createSlice({
  name: "pageSlice",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page += 1;
    },
    resetPage : (state, action) => {
      state.page = 1;
    }
  },
});

export const { setPage , resetPage} = pokemonSlice.actions;
export default pokemonSlice.reducer;
