import React from 'react';
import { useState } from 'react';
import { Header, Button, Container, Navigation } from '../../components';

const pages = [
  { url: '/Register', name: 'Register' },
  { url: '/Login', name: 'Login' },
];

const Login = () => {
  const [input, setInput] = useState();

  const handler = (e) => {
    e.preventDefault();
    console.log(input);
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          window.localStorage.setItem('token', data.token);
          //Navigate("/", { replace: true });
          return alert(data.msg);
        }
        return alert(data.err);
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
            type='text'
            placeholder='Password..'
            onChange={(e) => {
              setInput({ ...input, password: e.target.value });
            }}
            required
          />
          <Button type='submit'>Login</Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
