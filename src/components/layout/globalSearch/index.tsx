"use client";

import { useEffect } from "react";
import Section from "../section";
import useStore from "@/store";

const GlobalSearch = () => {
  const { isShowSearch, setIsShowSearch } = useStore((state: any) => state);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.keyCode == 75) {
        e.preventDefault();
        setIsShowSearch(!isShowSearch);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isShowSearch]);

  useEffect(() => {
    if (isShowSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowSearch]);

  return (
    <>
      <Section
        className={`${
          isShowSearch ? "visible opacity-100" : "invisible opacity-0"
        } h-screen fixed top-0 left-0 right-0 bottom-0 bg-[#00000050] backdrop-blur-md duration-200 z-[900]`}
      >
        <div className="w-[600px]"></div>
      </Section>
    </>
  );
};

export default GlobalSearch;
