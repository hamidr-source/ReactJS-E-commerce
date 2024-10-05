import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <LocalMallRoundedIcon sx={{fontSize: 50}} />
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
          <AccountCircleIcon fontSize="large" />
        </div>
        <div className="them-changer">
          <DarkModeRoundedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
