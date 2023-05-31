import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

// import {}

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    // counter: counterSlice,
    // errorReducer: errorReducer,
    // inputReducer: inputReducer,
    // postsReducer: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
