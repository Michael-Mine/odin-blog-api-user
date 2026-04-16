import CommentItem from "./CommentItem";

function Comments({ post }) {
  const comments = post.comments;
  console.log(comments);

  if (!comments) return <h3>No Comments yet</h3>;

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
