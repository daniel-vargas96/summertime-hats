import React from 'react';

export default class Header extends React.Component {

  render() {
    const setView = this.props.setView;
    return (
      <div>
        <header>
          <h5>$Wicked Sales</h5>
          <div onClick={() => setView('cart', {})} className="d-flex align-items-center text-white cursor-pointer">
            <span className="mr-2">{this.props.cartItemCount} Items</span>
            <i className="fas fa-shopping-cart cart-icon"></i>
          </div>
        </header>
      </div>
    );
  }
}
