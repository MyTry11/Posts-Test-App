import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import commentsReducer from "./commentsSlice";
import currentPageReducer from "./currentPageSlice";
import isFetchingReducer from "./isFetchingSlice";

// import {}

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    currentPage: currentPageReducer,
    isFetching: isFetchingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
