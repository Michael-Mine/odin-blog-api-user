import formatDate from "../utils/formatDate";

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

function CommentItem({ comment }) {
  const date = formatDate(comment.date);

  return (
    <div>
      <p>
        By {comment.authorId} on {date.toDateString()} at{" "}
        {date.toLocaleTimeString()}{" "}
      </p>
      <p>{comment.content}</p>
    </div>
  );
}

export default Comments;
