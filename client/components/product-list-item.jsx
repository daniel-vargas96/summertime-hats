import React from 'react';

export default class ProductListItem extends React.Component {

  render() {
    return (
      <div className="card">
        <img className="card-img-top object-fit" src='/images/shake-weight.jpg'></img>
        <div className="card-body">
          <h5 className="card-title">Shake Weight</h5>
          <p className="card-text"><medium className="text-muted">$19.99</medium></p>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    );
  }
}
