import React from 'react';

export default class ProductListItem extends React.Component {

  render() {
    return (
      <div className="card" style="width: 18rem;">
        <img className="card-img-top" src="..." alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    );
  }
}
