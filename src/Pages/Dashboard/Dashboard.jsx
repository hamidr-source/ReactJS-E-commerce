import React from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ProductBasket from "./ProductBasket";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Dashboard.css";

const Dashboard = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    cookies.remove("user", { path: "/", domain: "localhost" });
    navigate("/login");
  };

  return (
    <>
      <div className="dashboard">
        <h1>Hey Dear {cookies.cookies.user}</h1>
        <Button variant="outlined" color="error" onClick={handleLogOut}>
          Log Out <LogoutIcon />
        </Button>
      </div>
      <ProductBasket />
    </>
  );
};

export default Dashboard;
