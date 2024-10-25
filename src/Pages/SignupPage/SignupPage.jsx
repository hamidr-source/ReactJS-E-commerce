import React from "react";
import "../LoginPage/LoginPage.css";
import { useUsersData } from "../../Context/UserContext";
import { useInput } from "../../Hooks/useInput";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [emailProps, resetEmail] = useInput("");
  const [userNameProps, resetUserName] = useInput("");
  const [phoneProps, resetPhone] = useInput("");
  const [passwordProps, resetPassword] = useInput("");
  const [confirmPasswordProps, resetCofirmPassword] = useInput("");
  const { users, handleAddUser } = useUsersData();
  const navigate = useNavigate();
  let checkMobile = phoneProps.value.match(/^0?9[0-9]{9}$/);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordProps.value !== confirmPasswordProps.value) {
      alert("Confirm password is wrong!");
    } else if (!checkMobile) {
      alert("Phone number is wrong!");
    } else {
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
        navigate("/");
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
          <p className="message">
            Already registered?
            <Link to="/login"> Login now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignupPage;
