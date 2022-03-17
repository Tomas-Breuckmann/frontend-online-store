import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Productlist from '../productList/ProductList';

class Home extends Component {
  constructor() {
    super();
    const storage = JSON.parse(window.localStorage.getItem('cartProducts'));
    if (storage === null) window.localStorage.setItem('cartProducts', '[]');
    if (JSON.parse(window.localStorage.getItem('evaluations')) === null) {
      window.localStorage.setItem('evaluations', '[]');
    }
    // window.localStorage.setItem('cartProducts', '[]');
  }

  render() {
    return (
      <div>
        <nav>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        </nav>
        <Productlist />
      </div>
    );
  }
}

export default Home;
