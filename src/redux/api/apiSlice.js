import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://360elevate.digital/api",
  }),
  keepUnusedDataFor: 60,
  tagTypes: ["GET_MODULE", "GET_COMPONENT", "GET_ELEMENT","GET_FUNCTION" , "GET_FUNCTIONS_LOG"],
  endpoints: () => ({}),
});
