import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000" }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/category/",
    }),
    getSubCategory: builder.query({
      query: (cid) => `/subcategory/?cid=${cid}`,
    }),
    getAllProduct: builder.query({
      query: (page) => `/product/?page=${page}&limit=3`,
    }),
    getProductByCategory: builder.query({
      query: (body) => `/product/?page=${body.page}&limit=2&cid=${body.id}`,
    }),
    getProductBySubCategory: builder.query({
      query: (body) => `/product/?page=${body.page}&limit=2&s_cid=${body.id}`,
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
