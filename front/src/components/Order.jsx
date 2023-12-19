import React, { useState } from "react";
import { OrderMenu } from "./OrderMenu";

export const Order = () => {
  const [orderMenuOpen, setOrderMenuOpen] = useState(false);
  return (
    <div className="flex flex-col text-text font-bold">
      <div className="flex justify-center">
        <button
          onClick={() => setOrderMenuOpen(!orderMenuOpen)}
          className="bg-secondary py-2 px-6 my-1 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Записатись
        </button>
      </div>
      {orderMenuOpen && <OrderMenu />}
    </div>
  );
};
