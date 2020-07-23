import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Header from './components/header';
import ProductListItem from './components/product-list-item';

ReactDOM.render(
  <Header />,
  <ProductListItem />,
  <App />,
  document.querySelector('#root')
);
