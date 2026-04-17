import { useParams } from "react-router";
import { useState } from "react";

const useSendComment = (url, JWT) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(true);

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${JWT}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return response.json();
    })
    .then((response) => setResponse({ ...response }))
    .catch((error) => setError(error))
    .finally(() => setSending(false));

  return { response, error, sending };
};

function WriteComment() {
  const [input, setInput] = useState("");
  let { postId } = useParams();

  const submitComment = (input) => {
    console.log("submitting", input);
    const url = `http://localhost:3000/posts/${postId}/comments`;

    // attach JWT
    const JWT =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im0yQG1pbmUubmV0IiwiaWF0IjoxNzc2NDYwMjIyLCJleHAiOjE3NzcwNjUwMjJ9.kHE3jnmbp6X1aZbjMfMOcbZZUJK1HjIeYdi4WXzavvU";
    // useSendComment(url)
  };

  return (
    <div>
      <input
        data-testid="comment-input"
        type="text"
        placeholder="Add a comment"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={() => submitComment(input)}>Submit</button>
    </div>
  );
}

export default WriteComment;
