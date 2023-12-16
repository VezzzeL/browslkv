import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Catalog } from "./Catalog";

export const Layout = () => {
  return (
    <div className="select-none bg-primary">
      <Header />
      <Catalog />
      <Hero />
    </div>
  );
};
