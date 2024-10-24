import React from "react";
import "../LoginPage/LoginPage.css";
import { useUsersData } from "../../Context/UserContext";

const SignupPage = () => {
  const { users } = useUsersData();
  console.log(users)
  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form" style={{ display: "inline-block" }}>
          <input type="email" placeholder="email" />
          <input type="text" placeholder="username" />
          <input type="number" placeholder="phone" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <button>create</button>
          <p className="message">Already registered?</p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
