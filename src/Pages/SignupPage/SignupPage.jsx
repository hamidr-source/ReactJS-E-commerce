import React, { useState } from "react";
import "../LoginPage/LoginPage.css";
import { useUsersData } from "../../Context/UserContext";
import { useInput } from "../../Hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [emailProps, resetEmail] = useInput("");
  const [userNameProps, resetUserName] = useInput("");
  const [phoneProps, resetPhone] = useInput("");
  const [passwordProps, resetPassword] = useInput("");
  const [confirmPasswordProps, resetCofirmPassword] = useInput("");
  const { users, handleAddUser } = useUsersData();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const currentUser = users.find((userData) => {
      return (
        userData.email === emailProps.value &&
        userData.username === userNameProps.value &&
        userData.phone === phoneProps.value
      );
    });

    if (!currentUser) {
      await handleAddUser(
        emailProps.value,
        userNameProps.value,
        phoneProps.value,
        passwordProps.value
      );
      navigate("/home");
    } else {
      navigate("/login");
      alert("User already exist");
    }

    resetUserName();
    resetEmail();
    resetPassword();
    resetCofirmPassword();
    resetPhone();
  }

  return (
    <div className="login-page">
      <div className="form">
        <form
          className="register-form"
          style={{ display: "inline-block" }}
          onSubmit={handleSubmit}
        >
          <input type="email" placeholder="email" {...emailProps} />
          <input type="text" placeholder="username" {...userNameProps} />
          <input type="text" placeholder="phone" {...phoneProps} />
          <input type="password" placeholder="password" {...passwordProps} />
          <input
            type="password"
            placeholder="confirm password"
            {...confirmPasswordProps}
          />
          <button>create</button>
          <p className="message">Already registered?</p>
        </form>
      </div>
    </div>
  );
};
export default SignupPage;
