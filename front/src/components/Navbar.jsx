import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 p-4 bg-white shadow-md bg-imp">
      <ul className="flex flex-col space-y-4">
        <li>
          <a className="text-blue-500 hover:underline">Про мене</a>
        </li>
        <li>
          <a className="text-blue-500 hover:underline">Прайс</a>
        </li>
        <li>
          <a className="text-blue-500 hover:underline">Записатись</a>
        </li>
        <li>
          <a className="text-blue-500 hover:underline">Галерея</a>
        </li>
        <li>
          <a className="text-blue-500 hover:underline">Контакти</a>
        </li>
      </ul>
    </div>
  );
};
