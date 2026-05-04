import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

const useAllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("fetching allPosts");
    fetch(`${apiUrl}posts/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => setAllPosts([...response]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { allPosts, error, loading };
};

export default useAllPosts;
