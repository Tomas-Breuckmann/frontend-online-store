import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../categories/Category';
import Productlist from '../productList/ProductList';

class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        </nav>
        <Category />
        <Productlist />
      </div>
    );
  }
}

export default Home;
