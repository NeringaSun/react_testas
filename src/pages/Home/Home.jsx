import React, { useEffect, useState } from 'react';
import { Header, Container, Navigation } from '../../components';

const pages = [
  { url: '/', name: 'Home' },
  { url: '/Add', name: 'Add' },
];

const Home = () => {
  const token = window.localStorage.getItem('token');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/content/skills`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data || token) {
          setData(data);
          console.log(data);
        } else if (!data.content) {
          alert('No data found');
        }
      })
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <div>
      <Header>
        <Navigation links={pages} />
      </Header>
      <Container>
        <div>
          {!data && <h1 className='title'>Loading...</h1>}
          <div>
            {data.map((item, i) => (
              <div id={i}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
