import { useParams } from "react-router";
import usePost from "../hooks/usePost";
import { useEffect } from "react";

function Post() {
  const { setPostId, post, error, loading } = usePost();
  let { postId } = useParams();

  useEffect(() => {
    setPostId(postId);
  }, [postId, setPostId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </>
  );
}

export default Post;
