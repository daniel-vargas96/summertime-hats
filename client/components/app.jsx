import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <>
        <div className="container-fluid bg-light vh-100">
          <div className="row bg-dark text-white vw-100 p-3 mb-5">
            <Header />
          </div>
          <div className="row mb-5">
            <ProductList />
          </div>
          <div className="row">
            <ProductList />
          </div>
        </div>
      </>

    );
  }
}
