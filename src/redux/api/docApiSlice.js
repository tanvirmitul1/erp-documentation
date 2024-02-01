/* eslint-disable no-unused-vars */
import { apiSlice } from "./apiSlice";

// Retrieve the token from localStorage
const token = JSON.parse(localStorage.getItem("loginData"))?.token;

const docApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModule: builder.query({
      query: () => {
        return {
          url: "/modules",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_MODULE"],
    }),

    getComponent: builder.query({
      query: (moduleId) => {
        return {
          url: `/components/${moduleId}`,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_COMPONENT"],
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
  useGetComponentQuery,
  useLoginUserMutation,
  useAddModuleMutation,
  useAddComponentMutation,
} = docApiSlice;
