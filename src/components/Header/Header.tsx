/** @format */

import React from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { Paths } from "../../Paths";

import Cross from "../../assets/Cross.png";
import Burger from "../../assets/Burger.png";
import { NavBar } from "../NavBar/NavBar";
import { BurgerMenu } from "../../components/ui/BurgerMenu/BurgerMenu";

export const Header = ({ setIsOpen, isOpen }: any) => {
  const [activeLink, setActiveLink] = React.useState(""); // Состояние для активной ссылки

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  const linksHeader = [
    {
      linkName: "Главная",
      link: Paths.CodeEditor,
      id: 1,
    },
    {
      linkName: "Документация",
      link: Paths.documentation,
      id: 2,
    },
    {
      linkName: "Для сотрудника",
      link: Paths.employee,
      id: 3,
    },
  ];

  return (
    <>
      <header className={`header ${isOpen && "step"}`}>
        <nav className='header__nav'>
          <ul className='header__nav__links'>
            <BurgerMenu
              isOpen={isOpen}
              toggleBurger={toggleBurger}
            />
            {linksHeader.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className={
                    activeLink === item.link
                      ? "header__nav__link header__active"
                      : "header__nav__link"
                  }
                  onClick={() => setActiveLink(item.link)} // Обновляем активную ссылку по клику
                >
                  {item.linkName}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <Link
                className='header__nav__link heaer__singin header__active'
                to={Paths.home}
              >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
