import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";
import { useProducts } from "../../Context/ProductContext";
import { CookiesProvider, useCookies } from "react-cookie";
import HomePage from "../HomePage/HomePage";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const { users } = useProducts();
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
    const currentUser = users.find((user) => {
      return user.email === userEmail;
    });
    
    const date = new Date();
    date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
    setCookie("user", currentUser.username, { path: "/", expires: date });

    users.forEach((user) => {
      if (!currentUser) {
        console.log("Not found");
      } else if (
        currentUser.password === user.password &&
        currentUser.email === user.email
      ) {
        navigate("/home");
      }
    });
  }

  return (
    <CookiesProvider value={{ cookies }}>
      {cookies.user ? (
        <HomePage />
      ) : (
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
      )}
    </CookiesProvider>
  );
};

export default LoginPage;
