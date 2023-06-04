import { useEffect } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setPosts, postsAsync } from "../store/postsSlice";
import Post from "./Post";

export default function PostsList() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.value);
  useEffect(() => {
    dispatch(postsAsync("https://jsonplaceholder.typicode.com/posts"));
  }, []);
  return (
    <main className="">
      <ul className="postsContainer pt-10">
        {Boolean(posts.length) ? (
          posts.map((el) => <Post key={el.id} el={el}></Post>)
        ) : (
          <li>"No posts found"</li>
        )}
      </ul>
    </main>
  );
}
