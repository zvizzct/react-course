import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Víctor',
    email: 'victor@gmail.com',
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('formstate changed');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed');
  }, [email]);

  return (
    <>
      <h1>Form simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="victor@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === 'strider' && <Message />}
    </>
  );
};
