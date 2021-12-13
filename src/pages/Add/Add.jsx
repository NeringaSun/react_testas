import React from 'react';
import { Header, Navigation } from '../../components';

const pages = [
  { url: '/Home', name: 'Home' },
  { url: '/Add', name: 'Add' },
];

const Add = () => {
  return (
    <div>
      <Header>
        <Navigation links={pages} />
      </Header>
      Add
    </div>
  );
};

export default Add;
