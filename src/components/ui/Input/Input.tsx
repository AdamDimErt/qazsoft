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

export const Input = ({
  style,
  inputStyle,
  nameLabel,
  className,
  type,
  placeholder,
  name,
  value,
  onChange,
  label,
  ref,
}: Props) => {
  return (
    <label
      className={className || `input-block`}
      style={style}
    >
      <p >{nameLabel}</p>
      <input
        ref={ref}
        style={inputStyle}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        
      />
      {label ? (
        <span className='input-options__span'>{label}</span>
      ) : (
        ""
      )}
    </label>
  );
};
