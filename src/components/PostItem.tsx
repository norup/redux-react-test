import React from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
}

const PostItem = ({ post }: PostItemProps) => {
  return <div>{post.title}</div>;
};

export default PostItem;
