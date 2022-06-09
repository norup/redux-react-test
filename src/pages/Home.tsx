import React, { useState } from "react";
import Filter from "../components/Inputs/Filter";
import Sort from "../components/Inputs/Sort";
import Loader from "../components/Loader";
import PostsList from "../components/PostList/PostsList";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import "./Home.css";

const Home = () => {
  const { data, error, isLoading } = postAPI.useFetchAllPostsQuery();
  const [query, setQuery] = useState("");
  return (
    <>
      <h1>Посты</h1>
      <div className="sub-menu">
        <Filter onChange={(query: string) => setQuery(query)} />
        <Sort />
      </div>
      {isLoading ? (
        <Loader />
      ) : data && !error ? (
        <>
          <PostsList
            posts={
              query
                ? data.filter((post: IPost) =>
                    post.title.toLowerCase().includes(query)
                  )
                : data
            }
          />
        </>
      ) : (
        <span>{"Произошла ошибка при работе загрузке данных"}</span>
      )}
    </>
  );
};

export default Home;
