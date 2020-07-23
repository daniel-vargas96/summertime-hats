import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Header from './components/header';

ReactDOM.render(
  <Header />,
  <App />,
  document.querySelector('#root')
);
