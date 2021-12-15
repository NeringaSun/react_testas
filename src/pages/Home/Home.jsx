import React, { useEffect, useState } from 'react';
import {
  Header,
  Container,
  Navigation,
  Loading,
  Notification,
} from '../../components';

const pages = [
  { url: '/', name: 'Home' },
  { url: '/Add', name: 'Add' },
];

const Home = () => {
  const token = window.localStorage.getItem('token');
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/content/skills`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if ((token && data.length === 0) || data.error) {
          return setError(
            'No data found or server do not respond, please try again later!'
          );
        } else if (data || token) {
          return setData(data);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [token]);

  return (
    <div>
      <Header>
        <Navigation links={pages} />
      </Header>
      <Container>
        {error && <Notification color='error'>{error}</Notification>}
        {loading && <Loading />}
        <div>
          {data && (
            <div>
              {data.map((item, i) => (
                <div className='skill-card' key={i + item}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
