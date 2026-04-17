import formatDate from "../utils/formatDate";

function CommentItem({ comment }) {
  const date = formatDate(comment.date);

  return (
    <div>
      <p>
        By {comment.author.firstName} {comment.author.lastName.charAt(0)} on{" "}
        {date.toDateString()} at {date.toLocaleTimeString()}{" "}
      </p>
      <p>{comment.content}</p>
      <hr />
    </div>
  );
}

export default CommentItem;
