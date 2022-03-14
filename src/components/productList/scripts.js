export function handleInputChange({ target }) {
  this.setState({
    [target.name]: target.value,
  });
}

export async function handleInputClick() {
  const { searchProduct } = this.state;
  const retorno = await getProductFromQuery(searchProduct);
  console.log(retorno);
  this.setState({
    listProducts: retorno.results,
  });
}

export async function handleChangeCategory({ target: { value } }) {
  const retorno = await getProductsFromCategory(value);
  this.setState({
    searchCategory: value,
    listProducts: retorno.results,
  });
}

export async function handleSearch() {
  const { searchName, searchCategory } = this.state;
  const retorno = searchCategory !== ''
    ? await getProductsFromCategoryAndQuery(searchCategory, searchName)
    : await getProductsFromQuery(searchName);
  console.log(retorno);
  this.setState({
    retornoSearch: retorno.results,
  });
}
