/** @format */
import { FC, SetStateAction, useState } from "react";
import { Input } from "../ui/Input/Input";
import "./Login.scss";
import { Button } from "../ui/Button/Button";
import { useAppSelector } from "app/hooks";
import { log } from "console";

export const Login: FC = () => {
  const [value, setValue] = useState<string>("");
  const handleSelectChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue(event.target.value);
  };

  const options = useAppSelector(
    (state) => state.inputSlice,
  );
  const { width, fontFamily, fontSize, borderRadiusFrame } =
    options;
  console.log(borderRadiusFrame)

  const WidthMedia = {
    width: width + "px",
    fontFamily: fontFamily,
    borderRadius: borderRadiusFrame + "px",
  };
  console.log(borderRadiusFrame)

  return (
    <form className='form' style={{
      borderRadius:borderRadiusFrame+"px",
      width:width+"px",
      fontFamily:fontFamily
    }}>
      <h3 className='form-title'>Вход</h3>
      <div className='form-block'>
        <Input
          inputStyle={{ fontSize: fontSize + "px" }}
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
      </div>
      <a className='form-link' href='#'>
        Забыли пароль?
      </a>
      <Button />
    </form>
  );
};
