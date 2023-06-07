import { setPosts } from "./postsSlice";
import { setIsFetching } from "./isFetchingSlice";
import { setCurrentPage } from "./currentPageSlice";
import { AppDispatch } from "./store";

export const postsAsync = (url: string) => (useAppDispatch: AppDispatch) => {
  fetch(url).then((json) =>
    json
      .json()
      .then((json) => {
        useAppDispatch(setPosts(json));
        useAppDispatch(setCurrentPage());
      })
      .finally(() => {
        useAppDispatch(setIsFetching(false));
      })
  );
};
