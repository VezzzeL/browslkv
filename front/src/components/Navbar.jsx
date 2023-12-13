import React from "react";
import navbarItems from "../data/navbarItems.json";

export const Navbar = () => {
  return (
    <div className="fixed right-0 p-4 shadow-md bg-imp">
      <ul className="flex flex-col space-y-4">
        {navbarItems.map((item, index) => (
          <li key={index} className="hover:underline">
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
