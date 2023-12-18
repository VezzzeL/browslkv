import React from "react";
import { getImageUrl } from "../utils";
import catalogItems from "../data/catalogItems.json";

export const Catalog = () => {
  return (
    <div className="text-text font-nunito">
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-full">
          {catalogItems.map((item, index) => (
            <div key={index} className="m-1">
              <label className="block h-full w-full">
                <div className="rounded-xl h-full w-64 bg-secondary p-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  <div className="flex justify-center mb-1">
                    <img
                      src={getImageUrl(item.img)}
                      className="rounded-full object-cover w-24 h-24"
                      alt={item.text}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h2 className="text-lg font-semibold">{item.price}</h2>
                    <p className="text-sm">{item.text}</p>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
