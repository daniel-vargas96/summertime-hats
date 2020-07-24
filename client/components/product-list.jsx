import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  render() {
    const details = this.props.details;
    const productCards = this.state.products.map((product, index) =>
      <div key={index} className="col-md-4 mb-2">
        <ProductListItem image={product.image} name={product.name} price={product.price} description={product.shortDescription} details={() => details('details', { productId: product.productId })}/>
      </div>
    );

    return (
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="card-group">
            {productCards}
          </div>
        </div>
      </div>

    );
  }
}
