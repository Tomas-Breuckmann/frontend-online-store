import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsById } from '../../services/api';
import Form from '../form/Form';

class ProductDetails extends Component {
  constructor() {
    super();
    if (JSON.parse(window.localStorage.getItem('evaluations')) === null) {
      window.localStorage.setItem('evaluations', '[]');
    }
    this.state = {
      product: '',
      cartProducts: JSON.parse(window.localStorage.getItem('cartProducts')),
    };
  }

  async componentDidMount() {
    const { match: { params: { productId } } } = this.props;
    const data = await getProductsById(productId);
    this.setState({ product: data });
<<<<<<< HEAD
    // console.log(data);
=======
    /* console.log(data); */
>>>>>>> 2c3b3639c1cff5c0f6daa9f269546dbc721528e5
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
<<<<<<< HEAD
          <div>
            <h1>Avalie este produto</h1>
          </div>
            <form>
              <input type="text"></input>
            </form>
=======
          <Form id={ productId } />
>>>>>>> 2c3b3639c1cff5c0f6daa9f269546dbc721528e5
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
