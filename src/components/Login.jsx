import { useState } from "react";
import SignUp from "../components/SignUp";

function Login({ setLoggedIn }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);
  const [signUpForm, setSignUpForm] = useState(false);

  const openSignUpForm = () => {
    setSignUpForm(true);
  };

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

  if (loggingIn) return <p>Logging In...</p>;

  if (response && response.token) {
    localStorage.setItem("JWT", response.token);
    setLoggedIn(true);
  }

  return (
    <div>
      <h4>Login to post Comments</h4>
      <button onClick={openSignUpForm}>Sign Up</button>
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
      {signUpForm && <SignUp />}
    </div>
  );
}

export default Login;
