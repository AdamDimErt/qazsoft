/** @format */

import { FC } from "react";
import "./Button.scss";
interface ButtonProps {
  styleButton: {
    background: string
    
  },

  // existing props
}

export const Button: FC<ButtonProps> = ({
  styleButton,
}: any) => {
  return (
    <button
      style={styleButton}
      className='button'
      type='submit'
    >
      Войти
    </button>
  );
};
