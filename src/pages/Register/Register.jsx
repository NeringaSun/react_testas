import React from 'react';
import { useState } from 'react';
import { Header, Button, Container, Navigation } from '../../components';

const pages = [
  { url: '/Register', name: 'Register' },
  { url: '/Login', name: 'Login' },
];

const Register = () => {
  const [input, setInput] = useState();

  return (
    <div>
      <Header>
        <Navigation links={pages} />
      </Header>
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(input);
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
                  // e.target.reset();
                }
              })
              .catch((err) => alert(err.message))
              .finally(() => e.target.reset());
          }}
        >
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
          <Button type='submit'>Register</Button>
        </form>
      </Container>
    </div>
  );
};

export default Register;
