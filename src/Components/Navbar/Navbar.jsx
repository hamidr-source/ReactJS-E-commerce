import React from "react";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import "./Navbar.css";
import { Cookies } from "react-cookie";
import Category from "../Category/Category";

const Navbar = () => {
  const cookies = new Cookies();
  console.log(cookies.cookies.user);
  return (
    <div className="navbar">
      <div className="left-navbar">
        <LocalMallRoundedIcon sx={{ fontSize: 50 }} />
        <Category />
      </div>

      <div className="navigation">
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="right-navbar">
        <div className="login-icon">
          <Link to={!cookies.cookies.user ? "/login" : "/dashboard"}>
            <AccountCircleIcon fontSize="large" />
          </Link>
        </div>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Navbar;
