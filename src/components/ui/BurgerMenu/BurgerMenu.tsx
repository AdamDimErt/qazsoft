/** @format */

import React from "react";
import "./burgermenu.scss";

interface BurgerMenuProps {
  isOpen: boolean;
  toggleBurger: () => void;
  type?: string;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isOpen,
  toggleBurger,
  type,
}) => {
  return (
    <button
      className={`header__nav__link header__nav__link--burger ${type}`}
      onClick={toggleBurger}
    >
      <span
        className={`header__nav--burger ${
          isOpen ? "open" : ""
        }`}
      ></span>
    </button>
  );
};

export default BurgerMenu;
