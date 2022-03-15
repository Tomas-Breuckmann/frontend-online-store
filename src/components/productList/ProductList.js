// receber o value do input via prop
// requisição da API
import React from 'react';
import { getProductFromQuery,
  getProductsFromCategory,
  getProductsFromCategoryAndQuery } from '../../services/api';
import ProductCard from '../productCard/ProductCard';
import Category from '../categories/Category';
/* import * as script from './scripts'; */

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchProduct: '', // nome que vem do imput button, produto a ser buscado
      listProducts: [], // retorno diverso das api a ser renderizado
      searchCategory: '', // o ID da categoria
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleInputClick = async () => {
    const { searchProduct, searchCategory } = this.state;
    const retorno = searchCategory !== ''
      ? await getProductsFromCategoryAndQuery(searchCategory, searchProduct)
      : await getProductFromQuery(searchProduct);
    console.log(retorno);
    this.setState({
      listProducts: retorno.results,
    });
  }

  handleChangeCategory = async ({ target: { value } }) => {
    const retorno = await getProductsFromCategory(value);
    this.setState({
      searchCategory: value,
      listProducts: retorno.results,
    });
  }

  render() {
    const { searchProduct, listProducts } = this.state;
    console.log(listProducts);
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

        <Category
          handleChangeCategory={ this.handleChangeCategory }
        />

        {
          listProducts.map(({ id, title, thumbnail, price }) => (
            <ProductCard
              key={ id }
              id={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />
          ))
        }
      </div>
    );
  }
}

export default ProductList;
