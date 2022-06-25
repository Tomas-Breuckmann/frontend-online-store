import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCategories } from '../../services/api';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-right: 8px; 
  padding: 4px;
  background-color: whitesmoke;
  min-width: 300px;
`;

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount = async () => {
    const categorias = await getCategories();
    this.setState({ categories: categorias });
  }

  render() {
    const { categories } = this.state;
    const { handleChangeCategory } = this.props;
    return (
      <Main>
        { categories.map((element) => (
          <label htmlFor="catg" key={ element.id }>
            <input
              data-testid="category"
              type="radio"
              name="catg"
              id={ element.id }
              value={ element.id }
              onChange={ handleChangeCategory }
            />
            {element.name}
          </label>
        ))}
      </Main>
    );
  }
}

Category.propTypes = {
  handleChangeCategory: PropTypes.func.isRequired,
};

export default Category;
