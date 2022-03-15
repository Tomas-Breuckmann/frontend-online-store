import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { id, title, thumbnail, price } = this.props;
    return (
      <Link
        to={ `/product-details/${id}` }
        data-testid="product-detail-link"
      >
        <div data-testid="product" className="product-card">
          <img src={ thumbnail } alt="Product thumb" className="product-img" />
          <p className="product-title">{title}</p>
          <p className="product-price">{`R$: ${price}`}</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
