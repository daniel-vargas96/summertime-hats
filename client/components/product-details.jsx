import React from 'react';
import { response } from 'express';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state({ product: null });
  }

  componentDidMount(id) {
    const product = this.state.product;
    const newProduct = product.filter(p => p.productId !== id)
    fetch('/api/products/:productId')
      .then(response => response.json())
      .then(() => {
        this.setState({ product: newProduct });
      });
  }

  render () {
    return (

    )
  }
}
