import React, { useState } from "react";
import Filter from "../components/Inputs/Filter";
import Loader from "../components/Loader";
import PostsList from "../components/PostList/PostsList";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import "./Home.css";

const Home = () => {
  const { data, error, isLoading } = postAPI.useFetchAllPostsQuery();
  const [query, setQuery] = useState<string>("");
  const [sorted, setSorted] = useState<boolean>(false);

  return (
    <>
      <h1>Посты</h1>
      <div className="sub-menu">
        <Filter onChange={(query: string) => setQuery(query)} />
        <span
          className="sort-btn"
          onClick={() => {
            if (!sorted) {
              setSorted(true);
              // data.sort((a: IPost, b: IPost) => a.title - b.title);
            } else {
              setSorted(false);
            }
          }}
        >
          Отсортировать
        </span>
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
