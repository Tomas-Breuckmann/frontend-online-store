import React, { Component } from 'react';
import { getCategories } from '../../services/api';

// [ {
//     "id": "MLB5672",
//     "name": "Acessórios para Veículos"
// } ],

// pegar em uma constante o resultado da api
// salvar est resultado no state
// renderizar os .names com os key = .id

// TESTEEE!!

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount = async () => {
    const categorias = await getCategories();
    console.log(categorias);
    this.setState({ categories: categorias });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        {categories.map((element) => (
          <li
            data-testid="category"
            key={ element.id }
          >
            {element.name}
          </li>))}
      </section>
    );
  }
}

export default Category;
