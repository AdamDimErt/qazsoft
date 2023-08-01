export const InputCode = `
/** @format */

import React from "react";
import "./Input.scss";

type Props = {
  type: string;
  placeholder: string;
  name: string;
  nameLabel: string;
  style?: React.CSSProperties | undefined;
};

export const Input = (props: Props) => {
  return (
    <>
      <label className='input-block' style={props.style}>
        <p className='input-text'>{props.nameLabel}</p>
        <input
          className='input-input'
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
        />
      </label>
    </>
  );
};
`