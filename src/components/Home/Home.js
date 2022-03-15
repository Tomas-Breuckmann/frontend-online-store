import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Productlist from '../productList/ProductList';

class Home extends Component {
  constructor() {
    super();
    window.localStorage.setItem('cartProducts', '[]');
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
