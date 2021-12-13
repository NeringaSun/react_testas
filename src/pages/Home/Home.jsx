import React from 'react';
import { Header, Navigation } from '../../components';

const pages = [
  { url: '/Home', name: 'Home' },
  { url: '/Add', name: 'Add' },
];

const Home = () => {
  return (
    <div>
      <Header>
        <Navigation links={pages} />
      </Header>
      Home
    </div>
  );
};

export default Home;
