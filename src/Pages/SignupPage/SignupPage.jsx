import React, { useState } from "react";
import "../LoginPage/LoginPage.css";
import { useUsersData } from "../../Context/UserContext";
import { useInput } from "../../Hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VerticalAlignBottom } from "@mui/icons-material";

const SignupPage = () => {
  const [emailProps, resetEmail] = useInput("");
  const [userNameProps, resetUserName] = useInput("");
  const [phoneProps, resetPhone] = useInput("");
  const [passwordProps, resetPassword] = useInput("");
  const [confirmPasswordProps, resetCofirmPassword] = useInput("");
  const { users } = useUsersData();
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
      await axios.post("https://fakestoreapi.com/users", {
        body: JSON.stringify({
          id: users.lenght + 1,
          email: emailProps.value,
          username: userNameProps.value,
          password: passwordProps.value,
          name: {
            firstname: "",
            lastname: "",
          },
          address: {
            city: "",
            street: "",
            number: 0,
            zipcode: "",
            geolocation: {
              lat: "",
              long: "",
            },
          },
          phone: phoneProps.value,
        }),
      });
      navigate("/home");
    }

    console.log(currentUser);
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
