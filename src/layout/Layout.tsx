/** @format */

import React from "react";

import { Paths } from "../Paths";
import { Header } from "../components/Header/Header";
import { NavBar } from "../components/NavBar/NavBar";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavBar isOpen={isOpen} />
      {children}
    </>
  );
};
