import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => this.setState({ cart: data }))
      .catch(err => console.error(err));
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        const newCart = this.state.cart.concat(data);
        this.setState({ cart: newCart });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getCartItems();
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {
    const params = this.state.view.params;
    if (this.state.view.name === 'catalog') {
      return (
        <>
          <div className="container-fluid bg-light vh-100">
            <div className="row bg-dark text-white vw-100 p-3 mb-5">
              <Header />
            </div>
            <div>
              <ProductList details={this.setView} />
            </div>
          </div>
        </>

      );
    } else {
      return (
        <>
          <div className="container-fluid bg-light vh-100">
            <div className="row bg-dark text-white vw-100 p-3 mb-5">
              <Header cartItemCount={this.state.cart.length}/>
            </div>
            <div className="d-flex justify-content-center">
              <ProductDetails details={this.setView} params={params} addToCart={this.addToCart} />
            </div>
          </div>
        </>
      );
    }
  }
}
