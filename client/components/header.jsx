import React from 'react';

export default class Header extends React.Component {

  render() {
    const setView = this.props.setView;
    return (
      <div>
        <header className='container-fluid'>
          <div className='row container-fluid'>
            <div className='col-10 d-flex align-items-center'>
              <i className="fa fa-sun" aria-hidden="true"></i>
              <h5 className='pl-2'>SummerTime Hats</h5>

            </div>
            <div className='col-2'>
              <div onClick={() => setView('cart', {})} className="d-flex align-items-center text-white pointer">
                <span className="mr-2">{this.props.cartItemCount} Items</span>
                <i className="fas fa-shopping-cart cart-icon"></i>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
