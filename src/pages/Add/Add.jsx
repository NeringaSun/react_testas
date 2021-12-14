import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Navigation } from '../../components';

const pages = [
  { url: '/', name: 'Home' },
  { url: '/Add', name: 'Add' },
];

const Add = () => {
  const token = window.localStorage.getItem('token');
  const [userInputs, setUserInputs] = useState([]);
  const Navigate = useNavigate();

  return (
    <div>
      <Header>
        <Navigation links={pages} />
      </Header>
      <div>
        <div>
          <form
            onSubmit={(e) => {
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
                    Navigate('/', { replace: true });
                  }
                })
                .catch((err) => alert(err.message))
                .finally(() => e.target.reset());
            }}
          >
            <h1>ADD SKILLS</h1>
            <div>
              <div>
                <label className='label'>Title</label>
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
                <label className='label'>Description</label>
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
                <button>ADD SKILLS</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
