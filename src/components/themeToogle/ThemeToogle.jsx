import "./ThemeToogle.css";
import { IoMoon, IoSunny  } from "react-icons/io5";
import React, { useEffect, useState } from "react";

const ThemeToogle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saveTheme = localStorage.getItem("saved-theme");

    if (saveTheme) {
      setTheme(saveTheme);
      document.body.classList.toggle("dark-theme", saveTheme === "dark");
    }
  }, []);

  const toogleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme === "dark");
    localStorage.setItem("saved-theme", newTheme);
  };

  return (
    <div className="them-btn" onClick={toogleTheme}>
      {theme === "light" ? <IoMoon/> : <IoSunny/>}
    </div>
  );
};

export default ThemeToogle;
