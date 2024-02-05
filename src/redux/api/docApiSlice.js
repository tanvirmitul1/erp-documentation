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
    //get component using moduleid
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

    //get elements using moduleid and componentid
    getElement: builder.query({
      query: ({ moduleId, componentId }) => {
        return {
          url: `/elements/${moduleId}/${componentId}`,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_ELEMENT"],
    }),

    //get function using moduleid ,componentid and elementid

    getFunction: builder.query({
      query: ({ moduleId, componentId, elementId }) => {
        return {
          url: `/functions/${moduleId}/${componentId}/${elementId}`,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_ELEMENT"],
    }),

    //modal submission
    //module modal
    addModule: builder.mutation({
      query: (moduleData) => ({
        url: "/store-module",
        method: "POST",
        body: moduleData,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }),
    }),

    // update module

    updateModule: builder.mutation({
      query: (moduleData) => ({
        url: "/update-module",
        method: "POST",
        body: moduleData,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }),
    }),

    //component modal
    addComponent: builder.mutation({
      query: (componentData) => ({
        url: "/store-component",
        method: "POST",
        body: componentData,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }),
    }),

    // update component

    updateComponent: builder.mutation({
      query: (componentData) => ({
        url: "/update-element",
        method: "POST",
        body: componentData,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }),
    }),

    //element modal
    addElement: builder.mutation({
      query: (elementData) => ({
        url: "/store-element",
        method: "POST",
        body: elementData,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }),
    }),
    // update element

    updateElement: builder.mutation({
      query: (elementData) => ({
        url: "/update-element",
        method: "POST",
        body: elementData,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }),
    }),

    //element modal
    addFunction: builder.mutation({
      query: (functionData) => ({
        url: "/store-function",
        method: "POST",
        body: functionData,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }),
    }),
    // update element

    updateFunction: builder.mutation({
      query: (updateFunction) => ({
        url: "/update-element",
        method: "POST",
        body: updateFunction,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }),
    }),

    ///dummy
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
  useAddElementMutation,
  useAddFunctionMutation,
  useUpdateModuleMutation,
  useUpdateComponentMutation,
  useUpdateElementMutation,
  useUpdateFunctionMutation,
} = docApiSlice;
