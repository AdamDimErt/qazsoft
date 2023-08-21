import React from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import { Layout} from "../layout/Layout";
import { Paths } from "../../Paths";

import Cross from "../../assets/Cross.png";
import Burger from "../../assets/Burger.png";

export const Header = () => {

  const [activeLink, setActiveLink] = React.useState(""); // Состояние для активной ссылки
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  const linksHeader = [
    {
      linkName: "Главная",
      link : Paths.CodeEditor,
      id: 1,
    },
    {
      linkName: "Документация",
      link : Paths.documentation,
      id: 2,
    },
    {
      linkName: "Для сотрудника",
      link : Paths.employee,
      id: 3,
    },
  ];


  return (
    <Layout>
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav__links">
          <li className="header__nav__link header__nav__link--burger">
            <span className={`header__nav--burger ${isOpen ? "open" : ""}`}></span>
          </li>
          {linksHeader.map((item) => (
              <li
                key={item.id}
              >
                <Link
                  to={item.link}
                  className={activeLink === item.link ? "header__nav__link header__active" : "header__nav__link"}
                  onClick={() => setActiveLink(item.link)} // Обновляем активную ссылку по клику
                >
                  {item.linkName}
                </Link>
              </li>
            ))}
        </ul>
        <ul>
          <li>
            <Link className="header__nav__link heaer__singin header__active" to={Paths.home}>Войти</Link>
          </li>
        </ul>
      </nav>
    </header>
    </Layout>
  );
};
