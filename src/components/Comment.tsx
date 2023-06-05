import Accordion from "react-bootstrap/Accordion";
import { useAppDispatch, useAppSelector } from "../hooks";
import { commentsAsync } from "../store/commentsSlice";
import { PropsPost } from "./Post";

export default function Comment({ post }: PropsPost) {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments.value);
  const getComments = (url: string) => {
    dispatch(commentsAsync(url));
  };
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header
          onClick={() =>
            getComments(
              `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
            )
          }
        >
          Comments
        </Accordion.Header>
        <Accordion.Body>
          {Boolean(comments[post.id]) &&
            comments[post.id].map((comment) => (
              <div key={comment.id} className="flex border-b-2 mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGY21P4hAYMUg6fJtc0vW2fFt-Y5PdcA9gN5rv92WJw&s"
                  alt=""
                  className="w-12 h-12 mr-2"
                />
                <div>
                  <h6>{comment.email}</h6>
                  <p>{comment.body}</p>
                </div>
              </div>
            ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
