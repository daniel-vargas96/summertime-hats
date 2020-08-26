import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const placeOrder = this.props.placeOrder;
    placeOrder(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const setView = this.props.setView;
    const cart = this.props.cart;
    const totalPrice = cart.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <h1 mt-4>My Cart</h1>
          <h4 text-muted my-4>Order Total: ${(totalPrice / 100).toFixed(2)}</h4>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input name='name' type='text' value={this.state.name} onChange={this.handleChange} className='form-control'></input>
          </div>
          <div className='form-group'>
            <label htmlFor='credit-card'>Credit Card</label>
            <input name='creditCard' type='text' value={this.state.creditCard} onChange={this.handleChange} className='form-control'></input>
          </div>
          <div className='form-group'>
            <label htmlFor='shipping-address'>Shipping Address</label>
            <textarea name='shippingAddress' type='text' value={this.state.shippingAddress} onChange={this.handleChange} className='form-control'></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <span onClick={() => setView('catalog', {})} className="text-muted pointer">{'< Continue Shopping'}</span>
            <button type="button" onSubmit={this.handleSubmit} className="btn btn-primary">Place Order</button>
          </div>
        </form>
      </div>
    );

  }
}
