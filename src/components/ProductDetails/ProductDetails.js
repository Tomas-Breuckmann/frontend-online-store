import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsById } from '../../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { productId } } } = this.props;
    const data = await getProductsById(productId);
    this.setState({ product: data });
    console.log(data);
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, attributes } = product;
    return product === ''
      ? <p>Loading</p>
      : (
        <div className="details-container">
          <img src={ thumbnail } alt="Product thumb" className="product-img" />
          <p data-testid="product-detail-name" className="product-title">{title}</p>
          <p className="product-price">{`R$: ${price}`}</p>
          { attributes.map((attribute, index) => (
            <p key={ index }>{ `${attribute.name}: ${attribute.value_name}` }</p>
          ))}
        </div>
      );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductDetails;
