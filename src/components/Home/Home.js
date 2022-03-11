import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../categories/Category';

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
      </div>
    );
  }
}

export default Home;
