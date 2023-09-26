/** @format */

import { FC, useState } from "react";
import "./ViewWindow.scss";
import Screen from "../../assets/fullscreen.png";

import {
  FullScreen,
  useFullScreenHandle,
} from "react-full-screen";
import { Register } from "../../components/register/Register";
import { Login } from "../../components/Login/Login";
import BurgerMenu from "../../components/ui/BurgerMenu/BurgerMenu";
import { FullScreenOptions } from "../FullScreenOptions/FullScreenOptions";
import { History } from "../../components/History/History";
type Props = {
  type?: string;
};

const ViewWindow: FC<Props> = ({ type }) => {
  const [activeItems, setActiveItems] = useState<string[]>([
    "Email",
  ]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleItemClick = (item: string) => {
    setActiveItems((prevActiveItems) =>
      prevActiveItems.includes(item)
        ? prevActiveItems.filter((i) => i !== item)
        : [...prevActiveItems, item],
    );
  };
  const screen1 = useFullScreenHandle();

  const renderContent = () => {
    if (type === "login") {
      return <Login />;
    } else if (type === "register") {
      return <Register />;
    } else if (type === "history") {
      return <History />;
    }
  };



  const [isOpen, setIsOpen] = useState(false);
  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  const isItemActive = (item: string) =>
    activeItems.includes(item);

  return (
    <div className='window'>
      <div className='window-head'>
        <h3>View window</h3>
      </div>

      <FullScreen
        handle={screen1}
        onChange={(
          isFullscreen:
            | boolean
            | ((prevState: boolean) => boolean),
        ) => setIsFullscreen(isFullscreen)}
      >
        {isFullscreen && isOpen ? (
          <FullScreenOptions />
        ) : null}
        <div className='window-block'>
          {isFullscreen && (
            <BurgerMenu
              type='fullScreen'
              isOpen={isOpen}
              toggleBurger={toggleBurger}
            />
          )}
          {renderContent()}
        </div>
      </FullScreen>

      <div className='window-footer'>
        <div className='window__components'>
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
        </div>
        <img
          src={Screen}
          className='window-footer__img'
          alt='FullScreen'
          onClick={screen1.enter}
        />
      </div>
    </div>
  );
};

export default ViewWindow;
