/* eslint-disable no-unused-vars */
import { apiSlice } from "./apiSlice";

// const _token = document
//   .querySelector("meta[name='csrt-token']")
//   .getAttribute("content");

const docApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query({
      query: () => `/todos`,
      providesTags: ["GET_TODO"],
    }),
    // getProjectStatus: build.query({
    //   query: (query) => `/account/get-project-status-date?${query}`,
    //   providesTags: ["GET_PROJECT_STATUS"],
    // }),
    // createExtendRequest: build.mutation({
    //   query: (data) => ({
    //     url: `account/pm-extend-request-store`,
    //     method: "POST",
    //     body: data,
    //     formData: true,
    //   }),
    //   invalidatesTags: ["PENDING_EXTEND_REQUEST", "AUTHORIZE_PARENT_TASK"],
    // }),
    // createResolveSuggestionComment: build.mutation({
    //   query: (data) => ({
    //     url: `/account/project-status-resolve-submit`,
    //     method: "POST",
    //     body: {
    //       ...data,
    //       _token: _token,
    //     },
    //     headers: {
    //       _token: _token,
    //     },
    //   }),
    //   invalidatesTags: [
    //     "PENDING_RESOLVE_SUGGESTION_COMMENT",
    //     "AUTHORIZE_PARENT_TASK",
    //   ],
    // }),
  }),
});

export const {
  useGetTodoQuery,
  useGetProjectStatusQuery,

  useCreateResolveSuggestionCommentMutation,
  useCreateExtendRequestMutation,
} = docApiSlice;
