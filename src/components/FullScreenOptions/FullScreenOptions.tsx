/** @format */

import React, { useState } from "react";
import "./fullscreenoptions.scss";
import { Input } from "../../components/ui/Input/Input";

import { useAppDispatch } from "app/hooks";
import {
  setWidth,
  setFontFamily,
  setFontSize,
  setBorderRadiusFrame,
  setBorderRadiusElements,
  setBackground,
  setColorButtonGradient1,
  setColorButtonGradient2,
  setColorButtonGradient3,
  setColorButton,
} from "../../app/features/slice/InputStyleSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type Props = {};

interface Components {
  id: number;
  name: string;
}

const component: Components[] = [
  { id: 1, name: "Forgot password" },
  { id: 1, name: "Captcha" },
  { id: 1, name: "Login" },
  { id: 1, name: "Number" },
];

export const FullScreenOptions = (props: Props) => {
  const [options, setOptions] = useState({
    width: "320",
    family: "Montserrat",
    fontSize: 16,
    borderRadiusFrame: "0",
    borderRadiusElements: "0",
    background: "#fff",
    colorGradient1: "(90deg, rgba(2,0,36,1) 0%",
    colorGradient2: "(90deg, rgba(2,0,36,1) 0%",
    colorGradient3: "(90deg, rgba(2,0,36,1) 0%",
    colorButton: "#fff",
    colorButtonGradient1: "#fff",
    colorButtonGradient2: "#fff",
    colorButtonGradient3: "#fff",
    backgroundInput: "",
    colorFont: "",
  });
  const dispatch = useAppDispatch();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));

    const dispatchMap: Record<
      string,
      ActionCreatorWithPayload<string>
    > = {
      width: setWidth,
      family: setFontFamily,
      fontSize: setFontSize,
      borderRadiusFrame: setBorderRadiusFrame,
      borderRadiusElements: setBorderRadiusElements,
      background: setBackground,
      colorGradient1: setColorButtonGradient1,
      colorGradient2: setColorButtonGradient2,
      colorGradient3: setColorButtonGradient3,
      colorButton: setColorButton,
    };

    const dispatchFunction = dispatchMap[name];
    if (dispatchFunction) {
      dispatch(dispatchFunction(value));
    }
  };

  return (
    <nav className='full-options'>
      <div className='full-options__title'>
        <h3>Add components:</h3>
      </div>
      <ul className='full-options__list'>
        {component.map((component) => (
          <li key={component.id}>{component.name}</li>
        ))}
      </ul>
      <div className='full-options__settings'>
        <h3>Settings</h3>
        <div className='full-options__settings_block'>
          {" "}
          {/* media */}
          <Input
            type='number'
            placeholder={""}
            name={"width"}
            nameLabel={"Media (1920-360px)"}
            value={options.width}
            onChange={handleChange}
            className='input-fullscreen'
            label='width(in px)'
          />
          <Input
            type='number'
            placeholder={""}
            name={"width"}
            nameLabel={"Media (1920-360px)"}
            value={options.width}
            onChange={handleChange}
            className='input-fullscreen'
            label='width(in px)'
          />
          <Input
            type='number'
            placeholder={""}
            name={"width"}
            nameLabel={"Media (1920-360px)"}
            value={options.width}
            onChange={handleChange}
            className='input-fullscreen'
            label='width(in px)'
          />
          <Input
            type='number'
            placeholder={""}
            name={"width"}
            nameLabel={"Media (1920-360px)"}
            value={options.width}
            onChange={handleChange}
            className='input-fullscreen'
            label='width(in px)'
          />
          <Input
            type='number'
            placeholder={""}
            name={"width"}
            nameLabel={"Media (1920-360px)"}
            value={options.width}
            onChange={handleChange}
            className='input-fullscreen'
            label='width(in px)'
          />
          <Input
            type='number'
            placeholder={""}
            name={"width"}
            nameLabel={"Media (1920-360px)"}
            value={options.width}
            onChange={handleChange}
            className='input-fullscreen'
            label='width(in px)'
          />
          <Input
            type='number'
            placeholder={""}
            name={"width"}
            nameLabel={"Media (1920-360px)"}
            value={options.width}
            onChange={handleChange}
            className='input-fullscreen'
            label='width(in px)'
          />
          <Input
            type='number'
            placeholder={""}
            name={"width"}
            nameLabel={"Media (1920-360px)"}
            value={options.width}
            onChange={handleChange}
            className='input-fullscreen'
            label='width(in px)'
          />
        </div>
      </div>
    </nav>
  );
};
