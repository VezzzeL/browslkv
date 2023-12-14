import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";

export const Layout = () => {
  return (
    <div className="select-none bg-primary">
      <Header />
      <Hero />
    </div>
  );
};
