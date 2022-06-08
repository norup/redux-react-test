import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IUser";
import { fetchPosts } from "./ActionCreators";

interface PostState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: (state: PostState) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled.type]: (
      state: PostState,
      action: PayloadAction<IPost[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.posts = action.payload;
    },
    [fetchPosts.rejected.type]: (
      state: PostState,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
