/** @format */

import React from "react";
import Logo from "../../assets/logo.png";
import "./navbar.scss";
import DropdownMenu from "../DropdownMenu/DropDownMenu";
import { MenuItem } from "../DropdownMenu/DropDownMenu";
import { Link } from "react-router-dom";
import { Paths } from "Paths";

type Props = {};
export const NavBar = ({ isOpen }: any) => {
  console.log(isOpen);

  const web3: MenuItem[] = [
    { label: "Option 1", value: "option1", link: "/" },
    { label: "Option 2", value: "option2", link: "/" },
    { label: "Option 3", value: "option3", link: "/" },
  ];

  const custom: MenuItem[] = [
    { label: "Login", value: "option1", link: "/login" },
    {
      label: "Register",
      value: "/register",
      link: "/register",
    },
  ];

  return isOpen ? ( // Используйте оператор return и условие для возвращаемого JSX
    <div className='navbar'>
      <div className='navbar-logo'>
        <h3>Документация QazSoft</h3>
        <img src={Logo} alt='' />
        <div className='navbar-line'></div>
      </div>
      <nav className='navbar-menu'>
        <ul>
          <li>Введение</li>
          <li className='navbar-menu__title'>Интерфейсы</li>
          <DropdownMenu title='Web 3' items={web3} />
          <DropdownMenu
            title='Пользовательский'
            items={custom}
          />
          <DropdownMenu
            title='Администранивный'
            items={web3}
          />
          <DropdownMenu
            title='Статичные элементы навигации'
            items={web3}
          />
          <li>Управление транзакциями</li>
          <li>
            <Link to={Paths.history}>История платежей</Link>
          </li>
          <li>Попапы</li>
        </ul>
        <div className='navbar-line'></div>
      </nav>
    </div>
  ) : null; // В случае, если isOpen равен false, верните null или другой пустой JSX
};
