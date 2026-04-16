import { useParams } from "react-router";
import { useEffect } from "react";
import usePost from "../hooks/usePost";
import Comments from "../components/Comments";
import styles from "../styles/Post.module.css";

function dateDisplay(datePublished) {
  const timestamp = Date.parse(datePublished);
  const date = new Date(timestamp);
  return date.toDateString();
}

function Post() {
  const { setPostId, post, error, loading } = usePost();
  let { postId } = useParams();

  useEffect(() => {
    setPostId(postId);
  }, [postId, setPostId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  const date = dateDisplay(post.datePublished);
  console.log(post);

  return (
    <div>
      <img
        src={post.picUrl ? post.picUrl : "https://picsum.photos/400/600"}
        alt="blog post picture"
        className={styles.image}
      />
      <div className={styles.post}>
        <h2>{post.title}</h2>
        <p>By Mr Mine - Published {date}</p>
        <p>{post.content}</p>
      </div>
      <Comments post={post} />
    </div>
  );
}

export default Post;
