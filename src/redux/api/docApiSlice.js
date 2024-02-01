/* eslint-disable no-unused-vars */
import { apiSlice } from "./apiSlice";

// const _token = document
//   .querySelector("meta[name='csrt-token']")
//   .getAttribute("content");

const docApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModule: builder.query({
      query: () => `api/modules`,
      providesTags: ["GET_MODULE"],
    }),

    loginUser: builder.mutation({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
    }),
    addModule: builder.mutation({
      query: (moduleData) => ({
        url: "/modules",
        method: "POST",
        body: moduleData,
      }),
    }),
    addComponent: builder.mutation({
      query: (componentData) => ({
        url: "/modules",
        method: "POST",
        body: componentData,
      }),
    }),
  }),
});

export const {
  useGetModuleQuery,

  useLoginUserMutation,
  useAddModuleMutation,
  useAddComponentMutation,
} = docApiSlice;
