import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  Button,
  Container,
  Navigation,
  Notification,
} from '../../components';

const pages = [
  { url: '/Register', name: 'Register' },
  { url: '/Login', name: 'Login' },
];

const Register = () => {
  const [input, setInput] = useState([]);
  const [error, setError] = useState();
  const Navigate = useNavigate();

  const handler = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/auth/registr`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setInput('');
          Navigate('/', { replace: true });
          return alert('Registration was successful');
        }
        return setError('Registration failed, please try again later!');
      })
      .catch((err) => setError(err))
      .finally(() => e.target.reset());
  };

  return (
    <div>
      <Header>
        <Navigation links={pages} />
      </Header>
      <Container>
        {error && <Notification color='error'>{error}</Notification>}
        <form onSubmit={handler}>
          <h2>Register</h2>
          <input
            type='email'
            placeholder='Email..'
            onChange={(e) => {
              setInput({ ...input, email: e.target.value });
            }}
            required
          />
          <input
            type='password'
            placeholder='Password..'
            onChange={(e) => {
              setInput({ ...input, password: e.target.value });
            }}
            required
          />
          <Button type='submit'>Register</Button>
        </form>
      </Container>
    </div>
  );
};

export default Register;
