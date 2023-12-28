import React, { useState } from "react";
import axios from "axios";

export const OrderMenu = () => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [instagram, setInstagram] = useState("");

  const createOrder = async (e) => {
    e.preventDefault();
    const orderData = {
      clientName: name,
      phone: telephone,
      visitDate: selectedDate,
      slots: [{ time: selectedTime, available: true }],
      instagram,
    };
    try {
      const response = await axios.post("/orders", orderData);
      console.log("Order created successfully", response.data);
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
          <label className="block text-sm font-bold mb-2" htmlFor="date">
            Дата запису
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
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
