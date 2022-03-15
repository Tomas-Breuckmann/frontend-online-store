import React, { Component } from 'react';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: JSON.parse(window.localStorage.getItem('cartProducts')),
    };
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        {
          cartProducts === [] ? (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
            : (
              cartProducts.map(({ id, title, thumbnail, price, count }) => (
                <div
                  key={ id }
                >
                  <p data-testid="shopping-cart-product-name">{title}</p>
                  <p>{price}</p>
                  <img src={ thumbnail } alt={ title } />
                  <p data-testid="shopping-cart-product-quantity">{ count }</p>
                </div>
              )))
        }
      </div>
    );
  }
}

export default Cart;
