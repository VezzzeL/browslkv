import React, { useState } from "react";
import axios from "axios";
import { OrderDetails } from "./OrderDetails";
import catalogItems from "../data/catalogItems.json";

export const OrderMenu = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [instagram, setInstagram] = useState("");
  const [dateError, setDateError] = useState("");

  const createOrder = async (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];
    if (selectedDate < today) {
      setDateError("Дата повинна бути сьогодні, або в майбутньому");
      return;
    }

    const orderData = {
      clientName: name,
      phone: telephone,
      service: selectedService,
      visitDate: selectedDate,
      slots: [{ time: selectedTime, available: true }],
      instagram,
    };
    
    try {
      const response = await axios.post("/orders", orderData);
      console.log("Order created successfully", response.data);
      setDateError("");
      onSubmit();
    } catch (error) {
      console.error("Error creating order", error);
    }
  };

  const timeSlots = [
    "10:00",
    "11:30",
    "13:00",
    "14:30",
    "16:00",
    "17:30",
    "19:00",
  ];

  return (
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={createOrder}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Ім'я
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="telephone">
            Телефон
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="tel"
            type="tel"
            value={telephone}
            placeholder="0991112233"
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="service">
            Послуга
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="" disabled>
              Виберіть послугу
            </option>
            {catalogItems.map((item) => (
              <option key={item.text} value={item.text}>
                {item.text} - {item.price}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="date">
            Дата запису
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              dateError && "border-red-500"
            }`}
            id="date"
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setDateError("");
            }}
          />
          {dateError && (
            <p className="text-red-500 text-xs italic">{dateError}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="time">
            Година
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="" disabled>
              Виберіть слот
            </option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="blocktext-sm font-bold mb-2" htmlFor="instagram">
            Інстаграм
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="instagram"
            type="text"
            placeholder="Нікнейм"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-secondary font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Надіслати
          </button>
        </div>
      </form>
    </div>
  );
};
