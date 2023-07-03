import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../app/services/productApi";
import productReducer from "../app/services/productSlice";
import pageReducer from "../app/services/pageSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    page: pageReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
