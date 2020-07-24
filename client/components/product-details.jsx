import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ product: null });
  }

  componentDidMount() {
    const productId = this.props.params.productId;

    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data });
      });
  }

  render() {

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <img className="card-img-bottom" src="..." alt="Card image cap"></img>
      </div>

    );
  }
}
