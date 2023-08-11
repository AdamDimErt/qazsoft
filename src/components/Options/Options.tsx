/** @format */

import { Input } from "../../components/ui/Input/Input";
import React, { useState } from "react";
import { useAppDispatch } from "app/hooks";
import {
  setWidth,
  setFontFamily,
  setFontSize, setBorderRadiusFrame,
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
    background: "",
    colorGradient1: "",
    colorGradient2: "",
    colorButton: "",
    colorButtonGradient1: "",
    colorButtonGradient2: "",
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
      borderRadiusFrame:setBorderRadiusFrame
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
        <Input
          type='number'
          placeholder={""}
          name={"fontSize"}
          nameLabel={"Font-size"}
          value={options.fontSize}
          onChange={handleChange}
          className='input-options'
          label='(in px)'
        />
        <Input
          type='number'
          placeholder={""}
          name={"Border-raduis-frame"}
          nameLabel={"Border-raduis-frame"}
          value={options.borderRadiusFrame}
          onChange={handleChange}
          className='input-options'
          label='(in px)'
        />
      </div>
      <div className='options-block'>
        {" "}
        <Input
          type='number'
          placeholder={""}
          name={"width"}
          nameLabel={"Background"}
          value={options.width}
          onChange={handleChange}
          className='input-options'
          label='Hex'
        />
        <Input
          type='text'
          placeholder={""}
          name={"family"}
          nameLabel={"1. Color-gradient"}
          value={options.family}
          onChange={handleChange}
          className='input-options'
          label='Hex'
        />
        <Input
          type='number'
          placeholder={""}
          name={"fontSize"}
          nameLabel={"2. Color-gradient"}
          value={options.fontSize}
          onChange={handleChange}
          className='input-options'
          label='Hex'
        />
        <Input
          type='number'
          placeholder={""}
          name={"fontSize"}
          nameLabel={"2. Color-gradient"}
          value={options.fontSize}
          onChange={handleChange}
          className='input-options'
          label='Hex'
        />
        <Input
          type='number'
          placeholder={""}
          name={"fontSize"}
          nameLabel={"Color-button"}
          value={options.fontSize}
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
