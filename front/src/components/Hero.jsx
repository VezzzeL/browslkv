import React from "react";
import { getImageUrl } from "../utils";

export const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-4 text-text bg-imp mt-2 font-nunito rounded-2xl">
      <div className="col-span-2 bg-gray-100 p-6 shadow-md">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <img
            src={getImageUrl("hero/Kate.jpg")}
            alt="hero"
            className="w-64 h-64 rounded-full mb-0 mr-6"
          />
          <label className="flex flex-col align-middle justify-center md:mt-12 text-center">
            <p className="text-lg leading-relaxed">
              Привіт! Я - Катя, твій особистий бровист.
            </p>
            <p className="text-lg leading-relaxed">
              Захоплююсь тим, як брови можуть змінити образ і підкреслити
              природну красу.
            </p>
            <p className="text-lg leading-relaxed">
              У моїй студії ти отримаєш якісний сервіс та індивідуальний підхід.
            </p>
            <p className="text-lg leading-relaxed">
              Дозволь мені надати твоїм брівкам найкращий вигляд!
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};
