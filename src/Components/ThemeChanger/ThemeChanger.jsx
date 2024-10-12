import React, { useState } from "react";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

const ThemeChanger = () => {
  const [toggle, setToggle] = useState(false);

  if (toggle) {
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#2e2e47b0";
  } else {
    document.body.style.color = "#000";
    document.body.style.backgroundColor = "#fff";
  }

  return (
    <div className="them-changer" onClick={() => setToggle(!toggle)}>
      {toggle ? (
        <LightModeRoundedIcon fontSize="large" />
      ) : (
        <DarkModeRoundedIcon fontSize="large" />
      )}
    </div>
  );
};

export default ThemeChanger;
