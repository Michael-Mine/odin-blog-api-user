import { Link } from "react-router";
import styles from "../styles/HomePostItem.module.css";
import formatDate from "../utils/formatDate";

function HomePostItem({ post }) {
  const url = "/post/" + post.id;
  const date = formatDate(post.datePublished);

  return (
    <Link to={url} className={styles.item}>
      <img
        src={post.picUrl ? post.picUrl : "https://picsum.photos/200/300"}
        alt="blog post picture"
        className={styles.image}
      />
      <div className="text">
        <h3>{date.toDateString()}</h3>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </Link>
  );
}

export default HomePostItem;
