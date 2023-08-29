/** @format */

import { Input } from "../../components/ui/Input/Input";
import React, { useState } from "react";
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
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"; // Подставьте ваш путь к ActionCreatorWithPayload из redux-toolkit
import "./options.scss";

type Props = {};

export const Options = (props: Props) => {
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
    <div className='options'>
      <div className='options-block'>
        {/* media */}
        <Input
          type='number'
          placeholder={""}
          name={"width"}
          nameLabel={"Media (1920-360px)"}
          value={options.width}
          onChange={handleChange}
          className='input-options'
          label='width(in px)'
        />
        {/* font family */}
        <Input
          type='text'
          placeholder={""}
          name={"family"}
          nameLabel={"Font-family"}
          value={options.family}
          onChange={handleChange}
          className='input-options'
          label='family'
        />
        {/* fontSize */}
        <Input
          type='number'
          placeholder={""}
          name={"fontSize"}
          nameLabel={"Font Size"}
          value={options.fontSize}
          onChange={handleChange}
          className='input-options'
          label='(in px)'
        />
        {/* border radius frame */}
        <Input
          type='number'
          placeholder={""}
          name={"borderRadiusFrame"}
          nameLabel={"Border-radius-frame"}
          value={options.borderRadiusFrame}
          onChange={handleChange}
          className='input-options'
          label='round'
        />
        {/* border radius elements */}
        <Input
          type='number'
          placeholder={""}
          name={"borderRadiusElements"}
          nameLabel={"Border-radius-elements"}
          value={options.borderRadiusElements}
          onChange={handleChange}
          className='input-options'
          label='(in px)'
        />
      </div>
      <div className='options-block'>
        {/* background */}{" "}
        <Input
          type='string'
          placeholder={""}
          name={"background"}
          nameLabel={"Background"}
          value={options.background}
          onChange={handleChange}
          className='input-options'
          label='Hex'
        />
        {/* background button */}
        <Input
          type='text'
          placeholder={""}
          name={"colorButton"}
          nameLabel={"Color-button"}
          value={options.colorButton}
          onChange={handleChange}
          className='input-options'
          label='Hex'
        />
        <Input
          type='number'
          placeholder={""}
          name={"fontSize"}
          nameLabel={"1. Color-button-gradient"}
          value={options.fontSize}
          onChange={handleChange}
          className='input-options'
          label='Hex'
        />
        <Input
          type='number'
          placeholder={""}
          name={"fontSize"}
          nameLabel={"2. Color-button-gradient"}
          value={options.fontSize}
          onChange={handleChange}
          className='input-options'
          label='Hex'
        />
        <Input
          type='number'
          placeholder={""}
          name={"fontSize"}
          nameLabel={"background-input"}
          value={options.fontSize}
          onChange={handleChange}
          className='input-options'
          label='Hex'
        />
        <Input
          type='number'
          placeholder={""}
          name={"fontSize"}
          nameLabel={"Color-font"}
          value={options.fontSize}
          onChange={handleChange}
          className='input-options'
          label='Hex'
        />
      </div>
    </div>
  );
};
