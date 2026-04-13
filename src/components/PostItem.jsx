import styles from "../styles/PostItem.module.css";

function dateDisplay(datePublished) {
  const timestamp = Date.parse(datePublished);
  const date = new Date(timestamp);
  return date.toDateString();
}

function PostItem({ post }) {
  const date = dateDisplay(post.datePublished);

  return (
    // Link to post
    <div className={styles.item}>
      <img
        src={post.picUrl ? post.picUrl : "https://picsum.photos/200/300"}
        alt="blog post picture"
        className={styles.image}
      />
      <div className="text">
        <h3>{date}</h3>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default PostItem;
