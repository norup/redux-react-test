import MainContainer from "./components/MainContainer";
import PostForm from "./components/PostForm";
import { IPost } from "./models/IPost";
import { postAPI } from "./services/PostService";

function App() {
  const { data, error, isLoading } = postAPI.useFetchAllPostsQuery(5);
  const [createPost, {}] = postAPI.useCreatePostMutation();

  const handleCreate = async (post: IPost) => {
    await createPost(post);
  };

  return (
    <MainContainer>
      <div>
        {data?.map((item: IPost) => {
          return <span>{item.title}</span>;
        })}
      </div>
      <PostForm post={null} onSubmit={(values) => handleCreate(values)} />
    </MainContainer>
  );
}

export default App;
