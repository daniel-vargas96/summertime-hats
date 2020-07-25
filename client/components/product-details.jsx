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
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="card shadow object-fit p-3 col-md-10 d-flex">
          <button className="btn btn-outline-light" onClick={this.handleClick}><p className="card-text"><small className="text-muted"> &lt; Back to catalog</small></p></button>
          <div className="card-body">
            <div className="d-flex">
              <img className="mr-3" src={this.state.product.image} height="350px"></img>
              <div>
                <h5 className="card-title">{this.state.product.name}</h5>
                <p className="text-muted">{'$' + (this.state.product.price / 100).toFixed(2)}</p>
                <p className="card-text">{this.state.product.shortDescription}</p>
              </div>
            </div>
          </div>
          <p>{this.state.product.longDescription}</p>
        </div>
      );
    }
  }
}
