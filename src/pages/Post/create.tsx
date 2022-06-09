import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../../components/Forms/PostForm";
import { IPost } from "../../models/IPost";
import { postAPI } from "../../services/PostService";

const CreatePost = () => {
  const [createPost] = postAPI.useCreatePostMutation();
  const navigate = useNavigate();

  return (
    <div className="single-post">
      <h1>Добавление поста</h1>
      <PostForm
        post={null}
        onSubmit={(post: IPost) => {
          createPost(post);
          navigate("/");
        }}
      />
    </div>
  );
};

export default CreatePost;
