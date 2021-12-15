import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  Navigation,
  Button,
  Container,
  Notification,
} from '../../components';

const pages = [
  { url: '/', name: 'Home' },
  { url: '/Add', name: 'Add' },
];

const Add = () => {
  const token = window.localStorage.getItem('token');
  const [input, setInput] = useState([]);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const Navigate = useNavigate();

  const handler = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/content/skill`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setInput('');
          Navigate('/add', { replace: true });
          console.log(data);
          return setSuccess(data.msg);
        }
        return setError(
          data.error + ' or other error accurred, please try again later'
        );
      })
      .catch((err) => setError(err))
      .finally(() => e.target.reset());
  };

  return (
    <div>
      <Header>
        <Navigation links={pages} />
      </Header>
      <div>
        <Container>
          {error && <Notification color='error'>{error}</Notification>}
          {success && <Notification color='success'>{success}</Notification>}
          <form onSubmit={handler}>
            <h1>ADD SKILLS</h1>
            <div>
              <div>
                <input
                  className='input'
                  type='text'
                  placeholder='Title'
                  onChange={(e) =>
                    setInput({
                      ...input,
                      title: e.target.value.trim(),
                    })
                  }
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <textarea
                  className='textarea'
                  onChange={(e) =>
                    setInput({
                      ...input,
                      description: e.target.value.trim(),
                    })
                  }
                  placeholder='Description'
                  required
                ></textarea>
              </div>
            </div>

            <div>
              <div>
                <Button type='submit'>ADD SKILLS</Button>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Add;
