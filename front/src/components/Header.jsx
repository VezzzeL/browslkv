import React, { useState } from "react";
import { getImageUrl } from "../utils.js";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-imp text-text p-4">
      <img
        src={getImageUrl("header/BROWS_LKV_LOGO.png")}
        alt="logo"
        className="cursor-pointer"
      />
      <a onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#f1eee7"
          viewBox="0 0 256 256"
        >
          <path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"></path>
        </svg>
      </a>
      {menuOpen && (
        <div>
          <ul className="flex space-x-4 flex-col">
            <li>Про мене</li>
            <li>Прайс</li>
            <li>Записатись</li>
            <li>Галерея</li>
            <li>Контакти</li>
          </ul>
        </div>
      )}
    </div>
  );
};
