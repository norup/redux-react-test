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
        {posts.length >= 1 ? (
          posts.map((post) => {
            return <PostItem key={post.id} post={post} />;
          })
        ) : (
          <span className="not-found">Не найдено</span>
        )}
      </div>
    </>
  );
};

export default PostsList;
