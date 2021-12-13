import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import 'normalize.css';
import AuthProvider from '../src/context/auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
