import { useEffect } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import Post from "./Post";
import { setIsFetching } from "../store/isFetchingSlice";
import { postsAsync } from "../store/postAsyncMethod";

export default function PostsList() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.value);
  const currentPage = useAppSelector((state) => state.currentPage.value);
  const isFetching = useAppSelector((state) => state.isFetching.value);

  useEffect(() => {
    if (isFetching) {
      dispatch(
        postsAsync(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`
        )
      );
      console.log(isFetching);
    }
  }, [isFetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(setIsFetching(true));
    }
  };

  return (
    <main className="">
      <ul className="postsContainer pt-10">
        {Boolean(posts.length) ? (
          posts.map((el) => {
            return <Post key={el.id} post={el}></Post>;
          })
        ) : (
          <li>Loading posts...</li>
        )}
      </ul>
    </main>
  );
}
