/** @format */
import { FC, useState, useRef } from "react";
import { Input } from "../ui/Input/Input";
import "./register.scss";
import { Button } from "../ui/Button/Button";
import { useAppSelector } from "app/hooks";
import { CheckBox } from "../../components/ui/checkBox/CheckBox";

export const Register: FC = () => {
  const [value, setValue] = useState<string>("");

  const options = useAppSelector(
    (state) => state.inputSlice,
  );
  const {
    width,
    fontFamily,
    fontSize,
    borderRadiusFrame,
    borderRadiusElements,
    background,
    colorButton,
  } = options;

  const lastName = useRef();
  const Name = useRef();

  return (
    <form
      className='form'
      style={{
        borderRadius: borderRadiusFrame + "px",
        width: width + "px",
        fontFamily: fontFamily,
        background: background,
      }}
    >
      <h3 className='form-title'>Регистрация</h3>
      <div className='form-block'>
        <Input
          ref={lastName}
          type='text'
          placeholder='Фамилия'
          name='name'
          nameLabel='Фамилия'
          className='input-block'
        />
        <Input
          type='text'
          placeholder='Имя'
          name='name'
          nameLabel='Имя'
          value=''
          ref={Name}
        />
        <Input
          inputStyle={{
            fontSize: fontSize + "px",
            borderRadius: borderRadiusElements + "px",
            borderRadiusElements,
          }}
          type='email'
          placeholder='Email'
          name='email'
          nameLabel='Email'
          value={value}
          style={{
            marginBottom: "30px",
          }}
        />
        <Input
          type='password'
          placeholder='пароль'
          name='password'
          nameLabel='Введите пароль:'
          value=''
        />
        <Input
          type='password'
          placeholder='пароль'
          name='password'
          nameLabel='Введите пароль повторно:'
          value=''
        />
      </div>
      <CheckBox text='Пользовательское соглашение' />
      <Button styleButton={{ background: colorButton }} />
    </form>
  );
};
