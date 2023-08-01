/** @format */

import { FC, useState } from "react";
import { Login } from "../Login/Login";
import "./ViewWindow.scss";
import FullScreen from "../../assets/fullscreen.png";
import Draggable from "react-draggable";

const ViewWindow: FC = () => {
  const [activeItems, setActiveItems] = useState<string[]>([
    "Email",
  ]);

  const handleItemClick = (item: string) => {
    setActiveItems((prevActiveItems) =>
      prevActiveItems.includes(item)
        ? prevActiveItems.filter((i) => i !== item)
        : [...prevActiveItems, item],
    );
  };

  const isItemActive = (item: string) =>
    activeItems.includes(item);

  return (
    <div className='window'>
      <div className='window-head'>
        <p>View window</p>
      </div>

      <div className='window-block'>
        <Draggable>
          <Login />
        </Draggable>
      </div>

      <div className='window-footer'>
        <p>Add components:</p>
        <ul className='window-footer__list'>
          <li
            className={
              isItemActive("Captcha") ? "active" : ""
            }
            onClick={() => handleItemClick("Captcha")}
          >
            Captcha
          </li>
          <li
            className={
              isItemActive("Forgot password")
                ? "active"
                : ""
            }
            onClick={() =>
              handleItemClick("Forgot password")
            }
          >
            Forgot password
          </li>
          <li
            className={
              isItemActive("Login") ? "active" : ""
            }
            onClick={() => handleItemClick("Login")}
          >
            Login
          </li>
          <li
            className={
              isItemActive("Number") ? "active" : ""
            }
            onClick={() => handleItemClick("Number")}
          >
            Number
          </li>
          <li
            className={
              isItemActive("Email") ? "active" : ""
            }
            onClick={() => handleItemClick("Email")}
          >
            Email
          </li>
        </ul>
        <img
          src={FullScreen}
          className='window-footer__img'
          alt='FullScreen'
        />
      </div>
    </div>
  );
};

export default ViewWindow;