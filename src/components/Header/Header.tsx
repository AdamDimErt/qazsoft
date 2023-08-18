import React from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import {Layout, Typography} from 'antd';
import {Paths} from "../../Paths"

export const Header = () => {
  return (

    <Layout.Header className="header">
      <nav className="header__nav">
        <ul>
          <li>
            {/* <Link to={Paths.home}>Главная</Link> */}
          </li>
        </ul>
      </nav>
    </Layout.Header>
  );
};
