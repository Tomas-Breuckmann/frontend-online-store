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
    console.log(cartProducts);
    return (
      <div>
        {
          cartProducts.length === 0 ? (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
            : (
              cartProducts.map(({ title, thumbnail, price, count }, index) => (
                <div
                  key={ index }
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
