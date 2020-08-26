import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  const setView = props.setView;
  const cart = props.cart;
  const total = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  const cartItems = cart.map(item =>
    <CartSummaryItem key={item.cartItemId} item={item} />
  );

  if (cart.length === 0) {
    return (
      <div className='container'>
        <span
          onClick={() => setView('catalog', {})}
          className="text-muted ml-1 pointer">
          {'< Back to catalog'}
        </span>
        <h3 className="my-3">My Cart</h3>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <span
          onClick={() => setView('catalog', {})}
          className="text-muted ml-1 pointer">
          {'< Back to catalog'}
        </span>
        <h3 className="my-3">My Cart</h3>
        <div className="container">
          {cartItems}
        </div>
        <div className="align-items-center">
          <h4 className="mt-5">Item Total: {'$' + (total / 100).toFixed(2)}</h4>
          <button type="submit" onClick={() => {
            if (cart.length > 0) {
              setView('checkout', {});
            }
          }} className="btn btn-primary mt-3 mb-3">Checkout</button>
        </div>
      </div>
    );
  }
}
