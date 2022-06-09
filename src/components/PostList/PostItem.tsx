import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../models/IPost";
import { convertDate } from "../helpers";
import "./index.css";

interface PostItemProps {
  post: IPost;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link to={`/post/${post.id}`} className="post-list-item">
      <span className="time">{convertDate(post.timestamp)}</span>
      <h4 className="title">{post.title}</h4>
      <span className="description">
        {post.content.substring(0, 150) + "..."}
      </span>
    </Link>
  );
};

export default PostItem;
