/** @format */

import { FC } from "react";
import "./Button.scss";

type Props = {};

export const Button: FC = (props: Props) => {
  return (
    <button className='button' type='submit'>
      Войти
    </button>
  );
};
