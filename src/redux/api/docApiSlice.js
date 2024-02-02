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

    getSingleModule: builder.query({
      query: (moduleId) => {
        return {
          url: `/show-module/${moduleId}`,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_SINGLE_MODULE"],
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
    getElement: builder.query({
      query: (elementId) => {
        return {
          url: `/elements/${elementId}`,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_ELEMENT"],
    }),

    getFunction: builder.query({
      query: (elementId) => {
        return {
          url: `/functions/${elementId}`,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_FUNCTION"],
    }),

    //modal submission

    addModule: builder.mutation({
      query: (moduleData) => ({
        url: "/store-module",
        method: "POST",
        body: moduleData,
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("loginData"))?.token}`,
        },
      }),
    }),

    ///dummy

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
  useGetSingleModuleQuery,
  useGetComponentQuery,
  useGetElementQuery,
  useGetFunctionQuery,
  useAddModuleMutation,
  useAddComponentMutation,
} = docApiSlice;
