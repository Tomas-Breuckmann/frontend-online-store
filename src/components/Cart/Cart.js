import React, { Component } from 'react';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: JSON.parse(window.localStorage.getItem('cartProducts')),
    };
  }

  handleSum = (index) => {
    const { cartProducts } = this.state;
    cartProducts[index].count += 1;
    window.localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    this.setState({
      cartProducts: JSON.parse(window.localStorage.getItem('cartProducts')),
    });
  }

  handleMinus = (index) => {
    const { cartProducts } = this.state;
    const menos = cartProducts[index].count;
    const valor = menos <= 0 ? 0 : menos - 1;
    cartProducts[index].count = valor;
    window.localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    this.setState({
      cartProducts: JSON.parse(window.localStorage.getItem('cartProducts')),
    });
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
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={
                      () => this.handleSum(index)
                    }
                  >
                    Aumenta
                  </button>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={
                      () => this.handleMinus(index)
                    }
                  >
                    Diminui
                  </button>
                </div>
              )))
        }
      </div>
    );
  }
}

export default Cart;
