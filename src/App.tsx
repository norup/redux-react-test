import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchPosts } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector(
    (state) => state.postReducer
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>{JSON.stringify(posts)}</div>
      )}
    </div>
  );
}

export default App;
