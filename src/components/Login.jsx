import { useState } from "react";

function Login({ setLoggedIn }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const sendLogin = () => {
    console.log("logging in");
    setLoggingIn(true);

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username: inputEmail, password: inputPass }),
    })
      .then((response) => response.json())
      .then((response) => setResponse({ ...response }))
      .catch((error) => setError(error))
      .finally(() => setLoggingIn(false));
  };

  const logout = () => {
    localStorage.removeItem("JWT");
    setResponse(null);
    setInputEmail("");
    setInputPass("");
  };

  if (loggingIn) return <p>Logging In...</p>;

  if (response && response.token) {
    localStorage.setItem("JWT", response.token);
    setLoggedIn(true);
    return (
      <div>
        <h4>Successfully Logged in</h4>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h4>Login to post Comments</h4>
      <label>Email:</label>
      <input
        data-testid="username-input"
        type="text"
        value={inputEmail}
        onChange={(event) => setInputEmail(event.target.value)}
      />
      <label>Password:</label>
      <input
        data-testid="password-input"
        type="text"
        value={inputPass}
        onChange={(event) => setInputPass(event.target.value)}
      />
      <button onClick={sendLogin}>Login</button>
      {error && <p>A network error was encountered</p>}
      {response && <p>{response.message}</p>}
    </div>
  );
}

export default Login;
