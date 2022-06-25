import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Productlist from '../productList/ProductList';

const Main = styled.div`
  /* background-color: whitesmoke; */
  width: 90%;
  margin: 0 auto;
  `;
const Nav = styled.nav`
  /* background-color: whitesmoke; */
  display: flex;
  justify-content: flex-end;
  background-color: whitesmoke;
  padding: 8px;
`;

const Cart = styled(Link)`
  background-color: rgb(0, 0, 90);
  padding: 4px 12px 4px 12px;
  border-radius: 4px;
  color: whitesmoke;
`;

class Home extends Component {
  constructor() {
    super();
    const storage = JSON.parse(window.localStorage.getItem('cartProducts'));
    if (storage === null) window.localStorage.setItem('cartProducts', '[]');
    if (JSON.parse(window.localStorage.getItem('evaluations')) === null) {
      window.localStorage.setItem('evaluations', '[]');
    }
    // window.localStorage.setItem('cartProducts', '[]');
  }

  render() {
    return (
      <Main>
        <Nav>
          <Cart to="/cart" data-testid="shopping-cart-button">Carrinho</Cart>
        </Nav>
        <Productlist />
      </Main>
    );
  }
}

export default Home;
