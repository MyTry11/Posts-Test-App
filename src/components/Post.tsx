import { IPost } from "../store/postsSlice";
import Comment from "./Comment";

export interface PropsPost {
  post: IPost;
}

export default function Post({ post }: PropsPost) {
  return (
    <li className="post w-[40rem] border-2	border-slate-400	rounded-md p-3 mb-2">
      <div className="flex">
        <img
          className="w-16 pr-2 shrink 1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGY21P4hAYMUg6fJtc0vW2fFt-Y5PdcA9gN5rv92WJw&s"
          alt=""
        />
        <h5 className="postTitle ">{post.title}</h5>
      </div>
      <div>
        <p className="postBody">{post.body}</p>
        <Comment post={post}></Comment>
      </div>
    </li>
  );
}
