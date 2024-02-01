/* eslint-disable no-unused-vars */
import { apiSlice } from "./apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "https://360elevate.digital/api/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApiSlice;
