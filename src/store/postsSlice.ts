import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

// https://jsonplaceholder.typicode.com/comments?postId=1

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface InState {
  value: IPost[];
}

const initialState: InState = {
  value: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state: InState, action: PayloadAction<IPost[]>) => {
      state.value = action.payload;
    },
  },
});

export const postsAsync = (url: string) => (useAppDispatch: AppDispatch) => {
  fetch(url).then((json) =>
    json.json().then((json) => useAppDispatch(setPosts(json)))
  );
};
export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
