import { useState } from "react";

function SignUp() {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [inputPassConfirm, setInputPassConfirm] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [signingUp, setSigningUp] = useState(false);

  const sendSignUp = () => {
    console.log("signing up");
    setSigningUp(true);

    fetch("http://localhost:3000/sign-up", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstName: inputFirstName,
        lastName: inputLastName,
        username: inputEmail,
        password: inputPass,
        passwordCheck: inputPassConfirm,
      }),
    })
      .then((response) => response.json())
      .then((response) => setResponse({ ...response }))
      .catch((error) => setError(error))
      .finally(() => setSigningUp(false));
  };

  if (signingUp) return <p>Signing Up...</p>;
  if (response && response.message === "user created")
    return <p>{response.message}</p>;

  return (
    <div>
      <h4>Sign Up Form</h4>
      <div className="input-container">
        <label for="first-name">First Name:</label>
        <input
          className="input-field"
          id="first-name"
          data-testid="firstName-input"
          type="text"
          value={inputFirstName}
          onChange={(event) => setInputFirstName(event.target.value)}
        />
        <label for="last-name">Last Name:</label>
        <input
          className="input-field"
          id="last-name"
          data-testid="lastName-input"
          type="text"
          value={inputLastName}
          onChange={(event) => setInputLastName(event.target.value)}
        />
        <label for="username">Email:</label>
        <input
          className="input-field"
          id="username"
          data-testid="username-input"
          type="text"
          value={inputEmail}
          onChange={(event) => setInputEmail(event.target.value)}
        />
      </div>
      <div className="input-container">
        <label for="password">Password:</label>
        <input
          className="input-field"
          id="password"
          data-testid="password-input"
          type="text"
          value={inputPass}
          onChange={(event) => setInputPass(event.target.value)}
        />
        <label for="password-confirm">Password Confirm:</label>
        <input
          className="input-field"
          id="password-confirm"
          data-testid="password-confirm"
          type="text"
          value={inputPassConfirm}
          onChange={(event) => setInputPassConfirm(event.target.value)}
        />
      </div>
      <button onClick={sendSignUp}>Sign Up</button>
      {error && <p>A network error was encountered</p>}
      {response && <p>{response.message || response[0].msg}</p>}
    </div>
  );
}

export default SignUp;
