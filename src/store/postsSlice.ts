import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { AppDispatch } from "./store";

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
      state.value =
        // action.payload;
        [...state.value, ...action.payload]; //дублирует одну страницу
    },
    loadPosts: (state, action) => {
      // if (state.value.length !== 10) {
      state.value = [...state.value, ...action.payload];
      //   console.log(state.value.length);
      // } else {
      //   state.value = action.payload;
      //   console.log("else");
      // }
    },
  },
});

export const { setPosts, loadPosts } = postsSlice.actions;

export default postsSlice.reducer;
