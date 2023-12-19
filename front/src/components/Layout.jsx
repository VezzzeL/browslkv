import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Catalog } from "./Catalog";
import { Order } from "./Order";

export const Layout = () => {
  return (
    <div className="select-none bg-primary">
      <Header />
      <Catalog />
      <Order />
      <Hero />
    </div>
  );
};
