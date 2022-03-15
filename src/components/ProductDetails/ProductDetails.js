import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsById } from '../../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
      cartProducts: JSON.parse(window.localStorage.getItem('cartProducts')),
    };
  }

  async componentDidMount() {
    const { match: { params: { productId } } } = this.props;
    const data = await getProductsById(productId);
    this.setState({ product: data });
    console.log(data);
  }

  handleAddCart = (id, title, thumbnail, price) => {
    const { cartProducts } = this.state;
    const newItem = {
      id,
      title,
      thumbnail,
      price,
      count: 1,
    };
    this.setState({
      cartProducts: [...cartProducts, newItem],
    }, this.addStorage);
  }

  addStorage = () => {
    const { cartProducts } = this.state;
    window.localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, attributes } = product;
    const { match: { params: { productId } } } = this.props;
    return product === ''
      ? <p>Loading</p>
      : (
        <div className="details-container">
          <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
          <img src={ thumbnail } alt="Product thumb" className="product-img" />
          <p data-testid="product-detail-name" className="product-title">{title}</p>
          <p className="product-price">{`R$: ${price}`}</p>

          { attributes.map((attribute, index) => (
            <div key={ index }>
              <p>{ `${attribute.name}: ${attribute.value_name}` }</p>
            </div>
          ))}

          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handleAddCart(productId, title, thumbnail, price) }
          >
            Adicionar ao carrinho
          </button>
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
