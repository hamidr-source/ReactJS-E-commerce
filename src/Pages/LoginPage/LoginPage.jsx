import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useUsersData } from "../../Context/UserContext";
import Notification from "../../Components/Notification/Notification";
import "./LoginPage.css";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [notification, setNotification] = useState(null);
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
        setNotification({ message: "User not found!", type: "error" });
      } else if (userPassword !== currentUser.password) {
        setNotification({ message: "Password is wrong", type: "error" });
      } else {
        const date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        setCookie("user", currentUser.username, { path: "/", expires: date });
        navigate("/");
      }
    }
  }

  function closeNotification() {
    setNotification(null);
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
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={closeNotification}
            />
          )}
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
