import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";
import { useProducts } from "../../Context/ProductContext";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const { users } = useProducts();
  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
    const currentUser = users.find((user) => {
      return user.email === userEmail;
    });
    console.log(users);
    users.forEach((user) => {
      if (!currentUser) {
        return (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">This is an error Alert.</Alert>
          </Stack>
        );
      } else if (
        currentUser.password === user.password &&
        currentUser.email === user.email
      ) {
        navigate("/");
      }
    });
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="email"
            className="email-input"
            placeholder="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="text"
            className="username-input"
            placeholder="username"
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
