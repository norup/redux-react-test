import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../../components/Forms/PostForm";
import { convertDate } from "../../components/helpers";
import Loader from "../../components/Loader";
import { IPost } from "../../models/IPost";
import { postAPI } from "../../services/PostService";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = postAPI.useFetchPostByIdQuery(id);
  const [updatePost] = postAPI.useUpdatePostMutation();
  const [deletePost] = postAPI.useDeletePostMutation();

  return isLoading ? (
    <Loader />
  ) : data && !error ? (
    <div className="single-post">
      <h1>Редактирование</h1>
      <div className="single-post-header">
        <div className="left">
          <span onClick={() => navigate(`/post/${id}`)} className="button">
            Назад
          </span>
        </div>
        <div className="right">
          <span
            className="button"
            onClick={() => {
              deletePost(data);
              navigate("/");
            }}
          >
            Удалить
          </span>
        </div>
      </div>
      <PostForm
        post={data}
        onSubmit={(post: IPost) => {
          updatePost(post);
          navigate(`/post/${id}`);
        }}
      />
      <span className="single-post-timestamp">
        {"Дата публикации: " + convertDate(data.timestamp)}
      </span>
    </div>
  ) : (
    <span>{"Произошла ошибка при работе загрузке данных"}</span>
  );
};

export default EditPost;
