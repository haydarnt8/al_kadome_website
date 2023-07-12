import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://haydarnt8.pythonanywhere.com" }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/category/",
    }),
    getSubCategory: builder.query({
      query: (cid) => `/subcategory/?cid=${cid}`,
    }),
    getAllProduct: builder.query({
      query: (page) => `/product/?page=${page}&limit=10`,
    }),
    getProductByCategory: builder.query({
      query: (body) => `/product/?page=${body.page}&limit=10&cid=${body.id}`,
    }),
    getProductBySubCategory: builder.query({
      query: (body) => `/product/?page=${body.page}&limit=10&s_cid=${body.id}`,
    }),
    getProductBySearch: builder.query({
      query: (body) => `/product/?page=${body.page}&limit=10&search=${body.title}`,
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetSubCategoryQuery,
  useGetAllProductQuery,
  useGetProductByCategoryQuery,
  useGetProductBySubCategoryQuery,
  useGetProductBySearchQuery,
} = productApi;
