import React from "react";

export const OrderDetails = () => {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Дякуємо за ваше замовлення!</h2>
      <p className="mb-4">Ми чекаємо на вас:</p>
      <p className="font-bold">Ім'я:</p>
      <p className="font-bold">Послуга:</p>
      <p className="font-bold">Дата:</p>
      <p className="font-bold">Година:</p>
      <p className="mt-4">Будь ласка, приходьте своєчасно. Чекаємо на вас!</p>
      <button className="bg-secondary font-bold py-2 px-4 rounded-2xl mt-4 focus:outline-none focus:shadow-outline">
        Зрозуміло, дякуємо!
      </button>
    </div>
  );
};
