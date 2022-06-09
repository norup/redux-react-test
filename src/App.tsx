import Container from "./components/Container";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SinglePost from "./pages/Post";
import EditPost from "./pages/Post/edit";
import CreatePost from "./pages/Post/create";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/post/:id/edit" element={<EditPost />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
