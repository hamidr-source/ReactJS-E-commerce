import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useUsersData } from "../../Context/UserContext";
import "./LoginPage.css";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { users } = useUsersData();
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  console.log(users);
  function handleLogin(e) {
    e.preventDefault();
    if (userEmail) {
      const currentUser = users.find((user) => {
        return user.email === userEmail;
      });
      console.log(userEmail.password);
      if (!currentUser) {
        alert("User don't exist");
      } else if (userPassword !== currentUser.password) {
        alert("Password is wrong");
      } else {
        const date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        setCookie("user", currentUser.username, { path: "/", expires: date });
        navigate("/");
      }
    }
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            className="email-input"
            placeholder="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="password"
            className="password-input"
            placeholder="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button>login</button>
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
