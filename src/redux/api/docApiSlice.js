/* eslint-disable no-unused-vars */
import { apiSlice } from "./apiSlice";

// Retrieve the token from sessionStorage
const token = JSON.parse(sessionStorage.getItem("loginData"))?.token;

const docApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModule: builder.query({
      query: () => {
        return {
          url: "/modules",
          headers: {
            Authorization: `Bearer ${token}`,
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
      providesTags: ["GET_FUNCTION"],
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
      invalidatesTags: ["GET_MODULES_LOG"],
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
        url: "/update-component",
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
      // invalidatesTags: ["GET_ELEMENT"],
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
        url: "/update-function",
        method: "POST",
        body: updateFunction,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }),
      invalidatesTags: ["GET_FUNCTIONS_LOG"],
    }),

    //LOG

    //module log

    getModulesLog: builder.query({
      query: (moduleId) => {
        return {
          url: `/log-modules/${moduleId}`,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_MODULES_LOG"],
    }),

    //components log

    getComponentsLog: builder.query({
      query: ({ moduleId, componentId }) => {
        return {
          url: `/log-components/${moduleId}/${componentId}`,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_COMPONENTS_LOG"],
    }),

    //elements log

    getElementsLog: builder.query({
      query: ({ moduleId, componentId, elementId }) => {
        return {
          url: `/log-elements/${moduleId}/${componentId}/${elementId}`,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_ELEMENTS_LOG"],
    }),

    //functions log

    getFunctionsLog: builder.query({
      query: ({ moduleId, componentId, elementId, functionId }) => {
        return {
          url: `/log-functions/${moduleId}/${componentId}/${elementId}/${functionId}`,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: ["GET_FUNCTIONS_LOG"],
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
  useAddElementMutation,
  useAddFunctionMutation,
  useUpdateModuleMutation,
  useUpdateComponentMutation,
  useUpdateElementMutation,
  useUpdateFunctionMutation,
  useGetModulesLogQuery,
  useGetComponentsLogQuery,
  useGetElementsLogQuery,
  useGetFunctionsLogQuery,
} = docApiSlice;
