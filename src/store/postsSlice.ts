import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

// https://jsonplaceholder.typicode.com/comments?postId=1

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface InState {
  value: Post[];
}

const initialState: InState = {
  value: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state: InState, action: PayloadAction<Post[]>) => {
      state.value = action.payload;
    },
  },
});

export const postsAsync = () => (useAppDispatch: AppDispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts").then((json) =>
    json
      .json()
      .then((json) => useAppDispatch(postsSlice.actions.setPosts(json)))
  );
};
export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
