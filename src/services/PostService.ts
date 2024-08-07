import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

export const postAPI: any = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: () => ({
        url: `/posts`,
      }),
      providesTags: (result) => ["Post"],
    }),

    fetchPostById: build.query<IPost, string>({
      query: (id: string) => ({
        url: `/posts/${id}`,
      }),
      providesTags: (result) => ["Post"],
    }),

    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),

    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),

    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "DELETE",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
