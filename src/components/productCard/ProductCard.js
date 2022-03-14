import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <img src={ thumbnail } alt="Product thumb" className="product-img" />
        <p className="product-title">{title}</p>
        <p className="product-price">{`R$: ${price}`}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
