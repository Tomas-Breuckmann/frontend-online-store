// receber o value do input via prop
// requisição da API
import React from 'react';
import { getProductFromQuery } from '../../services/api';

class Productlist extends React.Component {
  constructor() {
    super();
    this.state = {
      searchProduct: '',
      listProducts: [],
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleInputClick = async () => {
    const { searchProduct } = this.state;
    const retorno = await getProductFromQuery(searchProduct);
    console.log(retorno);
    this.setState({
      listProducts: retorno.results,
    });
  }

  render() {
    const { searchProduct, listProducts } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="searchProduct"
          value={ searchProduct }
          onChange={ this.handleInputChange }
          placeholder="Search over a thousand products ..."
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.handleInputClick }
        >
          Busca produto
        </button>
        {
          listProducts.map(({ id, title, thumbnail, price }) => (
            <div data-testid="product" key={ id }>
              <img src={ thumbnail } alt={ title } />
              { title }
              { price }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Productlist;
