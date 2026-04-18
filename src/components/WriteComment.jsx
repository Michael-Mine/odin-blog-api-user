import { useParams } from "react-router";
import { useState } from "react";

function WriteComment() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);
  let { postId } = useParams();
  const url = `http://localhost:3000/posts/${postId}/comments`;
  const JWT = localStorage.getItem("JWT");

  const submitComment = (input) => {
    console.log("submitting", input);
    setSending(true);

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JWT}`,
      },
      body: JSON.stringify({ content: input }),
    })
      .then((response) => response.json())
      .then((response) => setResponse({ ...response }))
      .catch((error) => setError(error))
      .finally(() => setSending(false));
  };

  if (sending) return <p>Sending...</p>;
  if (response && response.message === "comment created")
    return <p>{response.message}</p>;

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
      {error && <p>A network error was encountered</p>}
      {response && <p>{response.message || response[0].msg}</p>}
    </div>
  );
}

export default WriteComment;
