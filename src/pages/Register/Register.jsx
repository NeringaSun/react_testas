import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Button, Container, Navigation } from '../../components';

const pages = [
  { url: '/Register', name: 'Register' },
  { url: '/Login', name: 'Login' },
];

const Register = () => {
  const [input, setInput] = useState([]);
  const Navigate = useNavigate();

  const handler = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert('Registration was successful');
          setInput('');
          Navigate('/', { replace: true });
        }
      })
      .catch((err) => alert(err.message))
      .finally(() => e.target.reset());
  };

  return (
    <div>
      <Header>
        <Navigation links={pages} />
      </Header>
      <Container>
        <form onSubmit={handler}>
          <label>Email</label>
          <input
            type='email'
            placeholder='Email..'
            onChange={(e) => {
              setInput({ ...input, email: e.target.value });
            }}
            required
          />
          <label>Password</label>
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
