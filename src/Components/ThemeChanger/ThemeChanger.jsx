import React, { useEffect, useState } from "react";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

const ThemeChanger = () => {
  let [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    let localStorageOnloadData = localStorage.getItem("theme");
    if (localStorageOnloadData === "dark") setDarkMode();
    else setLightMode();
  }, [theme]);

  const handleThemechange = () => {
    let localStorageData = localStorage.getItem("theme");
    if (localStorageData === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  const setLightMode = () => {
    setTheme("light");
    document.body.style.color = "#000";
    document.body.style.backgroundColor = "#fff";
    localStorage.setItem("theme", "light");
  };

  const setDarkMode = () => {
    setTheme("dark");
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#2e2e47b0";
    localStorage.setItem("theme", "dark");
  };

  return (
    <div className="theme-changer" onClick={handleThemechange}>
      {theme === "light" ? (
        <DarkModeRoundedIcon fontSize="large" />
      ) : (
        <LightModeRoundedIcon fontSize="large" />
      )}
    </div>
  );
};

export default ThemeChanger;
