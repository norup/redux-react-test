import React from "react";
import Filter from "../components/Inputs/Filter";
import Sort from "../components/Inputs/Sort";
import Loader from "../components/Loader";
import PostsList from "../components/PostList/PostsList";
import { postAPI } from "../services/PostService";
import "./Home.css";

const Home = () => {
  const { data, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
  return (
    <>
      <h1>Посты</h1>
      <div className="sub-menu">
        <Filter onChange={() => {}} />
        <Sort />
      </div>
      {isLoading ? (
        <Loader />
      ) : data && !error ? (
        <>
          <PostsList posts={data} />
        </>
      ) : (
        <span>{"Произошла ошибка при работе загрузке данных"}</span>
      )}
    </>
  );
};

export default Home;
