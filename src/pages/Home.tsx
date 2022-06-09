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
  const [sortedList, setSortedList] = useState<IPost[]>();
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
              let temp = [...data];
              setSortedList(
                temp.sort((a: IPost, b: IPost) =>
                  a.title.localeCompare(b.title)
                )
              );
            } else {
              setSorted(false);
              setSortedList([...data]);
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
                ? sorted && sortedList
                  ? sortedList.filter((post: IPost) =>
                      post.title.toLowerCase().includes(query)
                    )
                  : data.filter((post: IPost) =>
                      post.title.toLowerCase().includes(query)
                    )
                : sorted && sortedList
                ? sortedList
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
