import { useEffect, useState } from "react";

const usePost = () => {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:3000/posts/" + postId;

  useEffect(() => {
    console.log("fetching post " + url);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => setPost({ ...response }))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { setPostId, post, error, loading };
};

export default usePost;
