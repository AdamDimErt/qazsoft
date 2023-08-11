/** @format */

import React from "react";
import Logo from "../../assets/logo.png";
import "./navbar.scss";
import DropdownMenu from "../DropdownMenu/DropDownMenu";

type Props = {};

export const NavBar = (props: Props) => {
  interface MenuItem {
    label: string;
    value: string;
  }
  const web3: MenuItem[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
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
            items={web3}
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
          <li>История платежей</li>
          <li>Попапы</li>
        </ul>
        <div className='navbar-line'></div>
      </nav>
    </div>
  );
};
