import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { IPost } from "../store/postsSlice";
import Comment from "./Comment";
import { useAppDispatch, useAppSelector } from "../hooks";
import { commentsAsync } from "../store/commentsSlice";

interface Props {
  el: IPost;
}

export default function Post({ el }: Props) {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments.value);
  const getComments = (url: string) => {
    dispatch(commentsAsync(url));
  };

  return (
    <li className="post w-[40rem] border-2	border-slate-400	rounded-md p-3 mb-2">
      <div className="flex">
        <img
          className="w-16 pr-2 shrink 1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGY21P4hAYMUg6fJtc0vW2fFt-Y5PdcA9gN5rv92WJw&s"
          alt=""
        />
        <h5 className="postTitle ">{el.title}</h5>
      </div>
      <div>
        <p className="postBody">{el.body}</p>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header
              onClick={() =>
                getComments(
                  `https://jsonplaceholder.typicode.com/posts/${el.id}/comments`
                )
              }
            >
              Comments
            </Accordion.Header>
            <Accordion.Body>
              {Boolean(comments[el.id]) &&
                comments[el.id].map((comment) => (
                  <div key={comment.id}>
                    {comment.postId} {comment.name}
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </li>
  );
}
