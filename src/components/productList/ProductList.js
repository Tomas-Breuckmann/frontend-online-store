// receber o value do input via prop
// requisição da API
import React from 'react';
import styled from 'styled-components';
import { getProductFromQuery,
  getProductsFromCategory,
  getProductsFromCategoryAndQuery } from '../../services/api';
import ProductCard from '../productCard/ProductCard';
import Category from '../categories/Category';
/* import * as script from './scripts'; */

const Input = styled.input`
  background-color: whitesmoke;
  padding: 4px 12px 4px 12px;
  width: 250px;
  margin: 4px 4px 4px 0px;
  border: 1px solid black;
`;

const Fieldset = styled.fieldset`
  padding-left: 12px;
  font-size: 0.8em;
`;

const Button = styled.button`
  background-color: rgb(0, 0, 90);
  padding: 4px 12px 4px 12px;
  border-radius: 4px;
  color: whitesmoke;
`;

const ButtonCar = styled.button`
  background-color: rgb(0, 0, 90, 0.3);
  padding: 4px 12px 4px 12px;
  border-radius: 4px;
  color: black;
  font-size: 0.8em;
  display: flex;
  align-self: center;
`;

const Products = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
`;

const Card = styled.div`
  /* background-color:red; */
  height: 277px;
  width: 200px;
  box-shadow: 4px 4px 12px -6px rgba(0, 0, 90, 0.75);
`;

const RenderProducts = styled.div`
  /* background-color: green; */
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border: 1p solid whitesmoke;
  border-radius: 4px;
`;

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchProduct: '', // nome que vem do imput button, produto a ser buscado
      listProducts: [], // retorno diverso das api a ser renderizado
      searchCategory: '', // o ID da categoria
      cartProducts: JSON.parse(window.localStorage.getItem('cartProducts')),
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
    // console.log(retorno);
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
    const { searchProduct, listProducts } = this.state;
    // console.log(listProducts);
    return (
      <div>
        <Fieldset>
          <legend>Digite algum termo de pesquisa ou escolha uma categoria.</legend>
          <Input
            data-testid="query-input"
            type="text"
            name="searchProduct"
            value={ searchProduct }
            onChange={ this.handleInputChange }
            placeholder="Search"
          />
          <Button
            data-testid="query-button"
            type="submit"
            onClick={ this.handleInputClick }
          >
            Busca produto
          </Button>
        </Fieldset>
        <Products>
          <Category
            handleChangeCategory={ this.handleChangeCategory }
          />
          <RenderProducts>
            {
              listProducts.map(({ id, title, thumbnail, price }) => (
                <Card key={ id }>
                  <ProductCard
                    id={ id }
                    title={ title }
                    thumbnail={ thumbnail }
                    price={ price }
                  />
                  <ButtonCar
                    type="button"
                    onClick={ () => this.handleAddCart(id, title, thumbnail, price) }
                  >
                    Adicionar ao carrinho
                  </ButtonCar>
                </Card>
              ))
            }
          </RenderProducts>
        </Products>
      </div>
    );
  }
}

export default ProductList;
