import { useParams } from "react-router";
import { useEffect } from "react";
import useComments from "../hooks/useComments";
import CommentItem from "./CommentItem";

function Comments() {
  const { setPostId, comments, error, loading } = useComments();
  let { postId } = useParams();

  useEffect(() => {
    setPostId(postId);
  }, [postId, setPostId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  console.log(comments);

  if (comments.length === 0) return <h3>No Comments yet</h3>;

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return <CommentItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default Comments;
