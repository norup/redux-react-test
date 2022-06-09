import React from "react";
import { IPost } from "../../models/IPost";
import PostItem from "./PostItem";
import "./index.css";

interface PostsListProps {
  posts: IPost[];
}

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <>
      <div className="post-list">
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};

export default PostsList;
