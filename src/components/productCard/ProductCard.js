import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductLink = styled(Link)`
 background-color: red;
`;

const Card = styled.div`
  /* background-color: whitesmoke; */
  width: 200px;
  height: 250px;
  font-size: 0.8em;
  /* padding: 4px; */

  p {
    padding: 4px;
  }

  h3 {
    margin-top: 4px;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 150px;
`;

export default class ProductCard extends Component {
  render() {
    const { id, title, thumbnail, price } = this.props;
    return (
      <ProductLink to={ `/product-details/${id}` }>
        <Card>
          <Img src={ thumbnail } alt="Product thumb" />
          <p>{title}</p>
          <h3>{`R$: ${price}`}</h3>
        </Card>
      </ProductLink>
    );
  }
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
