import React, { useState } from "react";
import { OrderMenu } from "./OrderMenu";
import { OrderDetails } from "./OrderDetails";

export const Order = () => {
  const [orderMenuOpen, setOrderMenuOpen] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const handleOrderSubmit = () => {
    setOrderSubmitted(true);
  };

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
      {orderMenuOpen && !orderSubmitted && (
        <OrderMenu onSubmit={handleOrderSubmit} />
      )}
      {orderSubmitted && <OrderDetails />}{" "}
      {/*Render OrderDetails component when order is submitted */}
    </div>
  );
};
