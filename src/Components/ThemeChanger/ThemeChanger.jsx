import React, { useState } from "react";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

const ThemeChanger = () => {
  let theme = localStorage.getItem("theme");

  window.addEventListener("load", () => {
    let localStorageOnloadData = localStorage.getItem("theme");
    if (localStorageOnloadData === "dark") setDarkMode();
    else setLightMode();
  });

  const handleThemechange = () => {
    let localStorageData = localStorage.getItem("theme");
    if (localStorageData === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  const setLightMode = () => {
    theme = "light";
    document.body.style.color = "#000";
    document.body.style.backgroundColor = "#fff";
    localStorage.setItem("theme", "light");
  };

  const setDarkMode = () => {
    theme = "dark";
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#2e2e47b0";
    localStorage.setItem("theme", "dark");
  };

  return (
    <div
      className="them-changer"
      onClick={handleThemechange}
      defaultChecked="light"
    >
      {theme === "light" ? (
        <LightModeRoundedIcon fontSize="large" />
      ) : (
        <DarkModeRoundedIcon fontSize="large" />
      )}
    </div>
  );
};

export default ThemeChanger;
