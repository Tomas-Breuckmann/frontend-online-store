import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../../services/api';

// [ {
//     "id": "MLB5672",
//     "name": "Acessórios para Veículos"
// } ],

// pegar em uma constante o resultado da api
// salvar est resultado no state
// renderizar os .names com os key = .id

// TESTEEE!!!!!!!!!!!!!!!

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
      <section className="categories">
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
      </section>
    );
  }
}

Category.propTypes = {
  handleChangeCategory: PropTypes.func.isRequired,
};

export default Category;
