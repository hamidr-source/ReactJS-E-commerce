import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css"

const LoginPage = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="email" className="email-input" placeholder="email" />
          <input
            type="text"
            className="username-input"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="password-input"
            placeholder="password"
          />
          <button onClick={(e) => handleSignIn(e)}>login</button>
          <p className="message">
            Not registered?
            <Link to="/sign-up"> Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
