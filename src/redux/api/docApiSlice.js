/* eslint-disable no-unused-vars */
import { apiSlice } from "./apiSlice";

const docApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModule: builder.query({
      query: () => {
        // Retrieve the token from localStorage
        const token = JSON.parse(localStorage.getItem("loginData"))?.token;

        return {
          url: "/modules",
          headers: {
            // Include the token in the Authorization header
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
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
