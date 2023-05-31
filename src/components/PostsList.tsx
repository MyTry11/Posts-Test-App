import { useEffect } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useFetcher } from "react-router-dom";
import { setPosts, postsAsync } from "../store/postsSlice";
import ListGroup from "react-bootstrap/ListGroup";

export default function PostsList() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.value);
  //   const postsCopy = posts.map((e) => (e.img = "userimg"));
  useEffect(() => {
    dispatch(postsAsync());
  }, []);
  return (
    <main>
      <ul className="postsContainer">
        {Boolean(posts.length) ? (
          posts.map((el) => (
            <li key={el.id} className="post">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGY21P4hAYMUg6fJtc0vW2fFt-Y5PdcA9gN5rv92WJw&s"
                alt=""
              />
              <h3 className="postTitle">{el.title}</h3>
              <div className="postBody">{el.body}</div>
              <button className="commentsBtn">Comments</button>
            </li>
          ))
        ) : (
          <li>"No posts found"</li>
        )}
      </ul>
    </main>
  );
}
