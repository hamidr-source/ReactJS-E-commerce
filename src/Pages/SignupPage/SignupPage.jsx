import React, { useState } from "react";
import "../LoginPage/LoginPage.css";
import { useUsersData } from "../../Context/UserContext";
import { useInput } from "../../Hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../../Components/Notification/Notification";

const SignupPage = () => {
  const [emailProps, resetEmail] = useInput("");
  const [userNameProps, resetUserName] = useInput("");
  const [phoneProps, resetPhone] = useInput("");
  const [passwordProps, resetPassword] = useInput("");
  const [confirmPasswordProps, resetCofirmPassword] = useInput("");
  const { users, handleAddUser } = useUsersData();
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  let checkMobile = phoneProps.value.match(/^0?9[0-9]{9}$/);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordProps.value !== confirmPasswordProps.value) {
      setNotification({
        message: "Please check confirm password !!",
        type: "error",
      });
    } else if (!checkMobile) {
      setNotification({ message: "Phone number invalid !!", type: "error" });
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
        setNotification({ message: "User already exist !!", type: "error" });
      }

      resetUserName();
      resetEmail();
      resetPassword();
      resetCofirmPassword();
      resetPhone();
    }
  }

  function closeNotification() {
    setNotification(null);
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
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={closeNotification}
          />
        )}
      </div>
    </div>
  );
};
export default SignupPage;
