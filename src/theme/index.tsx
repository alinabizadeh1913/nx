"use client";

import { useEffect, useState } from "react";

const ChangeTheme = () => {
  const [status, setStatus] = useState<"light" | "dark">("light");

  const changeTheme = () => {
    if (status === "light") {
      setTimeout(() => {
        setStatus("dark");
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }, 700);
    } else {
      setTimeout(() => {
        setStatus("light");
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }, 700);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      if (theme === "dark") {
        setStatus("dark");
        document.documentElement.classList.add("dark");
      } else {
        setStatus("light");
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  return (
    <section
      className="fixed bottom-[65px] left-[65px] bg-white rounded-full p-2 px-4 border border-[#797979] cursor-pointer select-none hover:bg-[#f6f7fa] dark:hover:bg-[#d5e3fd]"
      onClick={changeTheme}
    >
      {status === "dark" ? "Light" : "Dark"}
    </section>
  );
};

export default ChangeTheme;
