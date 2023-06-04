import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import commentsReducer from "./commentsSlice";

// import {}

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    // counter: counterSlice,
    // errorReducer: errorReducer,
    // inputReducer: inputReducer,
    // postsReducer: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
