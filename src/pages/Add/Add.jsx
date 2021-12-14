import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Navigation, Button } from '../../components';

const pages = [
  { url: '/', name: 'Home' },
  { url: '/Add', name: 'Add' },
];

const Add = () => {
  const token = window.localStorage.getItem('token');
  const [userInputs, setUserInputs] = useState([]);
  const Navigate = useNavigate();

  const handler = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/content/skills`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInputs),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert('Skills added succesfully!');
          setUserInputs('');
          Navigate('/add', { replace: true });
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
      <div>
        <div>
          <form onSubmit={handler}>
            <h1>ADD SKILLS</h1>
            <div>
              <div>
                <input
                  className='input'
                  type='text'
                  placeholder='Title'
                  onChange={(e) =>
                    setUserInputs({
                      ...userInputs,
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
                    setUserInputs({
                      ...userInputs,
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
        </div>
      </div>
    </div>
  );
};

export default Add;
