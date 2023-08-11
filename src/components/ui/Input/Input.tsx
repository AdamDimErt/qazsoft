/** @format */

import React from "react";
import "./Input.scss";
import { InputInterface } from "types/InputInterface";
import { useAppSelector } from "app/hooks";

interface Props extends InputInterface {
  style?: React.CSSProperties | any;
  inputStyle?: React.CSSProperties | any;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

export const Input = (props: Props) => {
  console.log(props.style);

  const data = useAppSelector((state) => state.inputSlice);

  return (
    <label className='input-block' style={props.style}>
      <p className='input-text'>{props.nameLabel}</p>
      <input
        style={props.inputStyle}
        className={props.className || `input-input`}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.label ? (
        <span className='input-options__span'>
          {props.label}
        </span>
      ) : (
        ""
      )}
    </label>
  );
};
