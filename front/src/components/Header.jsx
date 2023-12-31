import React, { useState } from "react";
import { getImageUrl } from "../utils.js";
import { Navbar } from "./Navbar.jsx";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`flex flex-row bg-imp text-text z-2 font-nunito relative`}>
      <div className="flex-grow flex-col mx-auto text-center">
        <img
          src={getImageUrl("header/Browslkv_logo-main.png")}
          alt="logo"
          className="cursor-pointer w-32 h-32 mx-auto"
        />
        <h1 className="text-4xl font-bold">BROWS_LKV</h1>
      </div>
      <div className="flex-shrink my-16 mr-8 z-20">
        <a
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer mr-0"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fafafa"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g id="SVGRepo_iconCarrier">
                <path d="M11 12H3" /> <path d="M16 6H3" /> <path d="M16 18H3" />{" "}
                <path d="M19 10l-4 4" /> <path d="M15 10l4 4" />{" "}
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#f1eee7"
              viewBox="0 0 256 256"
            >
              <path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"></path>
            </svg>
          )}
        </a>
        <div className="relative">{menuOpen && <Navbar />}</div>
      </div>
    </div>
  );
};
