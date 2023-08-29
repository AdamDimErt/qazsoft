export const loginComponentCodeTS = `
export const Login: FC = () => {
  return (
    
    <form className='form'>
      <h3 className='form-title'>Вход</h3>
      <div className='form-block'>
        <Input
          type='email'
          placeholder='Email'
          name='email'
          nameLabel='Email'
          style={{ marginBottom: "30px" }}
        />
        <Input
          type='password'
          placeholder='пароль'
          name='password'
          nameLabel='Введите пароль:'
        />
      </div>
      <a className='form-link' href='#'>
        Забыли пароль?
      </a>
      <Button />
    </form>
  );
};

`;
