import Loading from "./components/Loading";
import MainContainer from "./components/MainContainer";
import PostsList from "./components/PostsList";
import { postAPI } from "./services/PostService";

function App() {
  const { data, error, isLoading } = postAPI.useFetchAllPostsQuery(5);

  return (
    <MainContainer>
      {isLoading ? (
        <Loading />
      ) : data && !error ? (
        <PostsList posts={data} />
      ) : (
        <span>{error}</span>
      )}
    </MainContainer>
  );
}

export default App;
