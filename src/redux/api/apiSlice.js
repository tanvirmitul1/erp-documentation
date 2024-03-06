/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiBaseUrl = import.meta.env.VITE_BASE_URL;
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  keepUnusedDataFor: 60,
  tagTypes: [
    "GET_MODULE",
    "GET_COMPONENT",
    "GET_ELEMENT",
    "GET_FUNCTION",
    "GET_FUNCTIONS_LOG",
    "GET_MODULES_LOG",
  ],
  endpoints: () => ({}),
});
