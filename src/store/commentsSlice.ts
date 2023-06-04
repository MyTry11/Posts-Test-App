import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

// https://jsonplaceholder.typicode.com/comments?postId=1

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// interface InState {
//   value: IComment[];
// }

const postId: string = "postId";
interface InStateTest {
  value: {
    [key: string]: IComment[];
  };
}

const initialState: InStateTest = {
  value: {},
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments2: (state: InStateTest, action: PayloadAction<IComment[]>) => {
      state.value[action.payload[0][postId]] = action.payload;
    },
  },
});

export const commentsAsync = (url: string) => (useAppDispatch: AppDispatch) => {
  fetch(url).then((json) =>
    json.json().then((json) => useAppDispatch(setComments2(json)))
  );
};

export const { setComments2 } = commentsSlice.actions;

export default commentsSlice.reducer;
