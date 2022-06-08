import axios from "axios";
import { IPost } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "post/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IPost[]>("http://localhost:3000/posts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Ошибка при загрузки данных с сервера");
    }
  }
);
