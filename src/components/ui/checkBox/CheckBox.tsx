/** @format */

import React from "react";

import "./checkbox.scss";

type Props = {
  text: string;
};

export const CheckBox = ({ text }: Props) => {
  return (
    <label className='box'>
      <p>{text}</p>
      <input type='checkbox' />
      <span className='mark'></span>
    </label>
  );
};
