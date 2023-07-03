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
    reset : (state, action) => {
      state.page = 1;
    }
  },
});

export const { setPage , reset} = pokemonSlice.actions;
export default pokemonSlice.reducer;
