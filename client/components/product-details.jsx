import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ product: null });
    this.productDetails = this.productDetails.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.productDetails();
  }

  productDetails() {
    const productId = this.props.params.productId;

    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data });
      });
  }

  handleClick() {
    this.props.details('catalog', {});
  }

  render() {
    const product = this.state.product;
    const addToCart = this.props.addToCart;
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="container card shadow object-fit p-3 col-md-10 d-flex mb-5">
          <div className='row mb-3'>
            <div onClick={this.handleClick}><p className="card-text"><small className="text-muted pointer ml-2 back"> &lt; Back to catalog</small></p></div>
          </div>
          <div className="row d-flex">
            <img className="col-md-5 img-fluid" src={this.state.product.image}></img>
            <div className="col-md-7 card-details">
              <h3 className='p-2'>{this.state.product.name}</h3>
              <h5 className="text-muted p-2">{'$' + (this.state.product.price / 100).toFixed(2)}</h5>
              <p className='p-2'>{this.state.product.shortDescription}</p>
              <button type="button" onClick={() => addToCart(product)} className="btn btn-primary p-2">Add to Cart</button>
            </div>
          </div>
          <div className="row mt-3">
            <p className='p-5'>{this.state.product.longDescription}</p>
          </div>
        </div>
      );
    }
  }
}
