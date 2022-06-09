import React from "react";
import Loader from "../../components/Loader";
import { postAPI } from "../../services/PostService";
import { useParams, useNavigate } from "react-router-dom";
import { convertDate } from "../../components/helpers";
import "./index.css";

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = postAPI.useFetchPostByIdQuery(id);
  const [deletePost] = postAPI.useDeletePostMutation();
  return isLoading ? (
    <Loader />
  ) : data && !error ? (
    <div className="single-post">
      <h1>{data.title}</h1>
      <div className="single-post-header">
        <div className="left">
          <span onClick={() => navigate("/")} className="button">
            Назад
          </span>
        </div>
        <div className="right">
          <span className="button" onClick={() => navigate(`/post/${id}/edit`)}>
            Редактировать
          </span>
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
      <span className="single-post-content">{data.content}</span>
      <span className="single-post-timestamp">
        {"Дата публикации: " + convertDate(data.timestamp)}
      </span>
    </div>
  ) : (
    <span>{"Произошла ошибка при работе загрузке данных"}</span>
  );
};

export default SinglePost;
