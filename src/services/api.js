// Requisito 01
const ENDPOINT_CATEGORY = 'https://api.mercadolibre.com/sites/MLB/categories';
const ENDPOINT_ID = 'https://api.mercadolibre.com/sites/MLB/search?category=';

// https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

export async function getCategories() {
  const fetchAPI = await fetch(ENDPOINT_CATEGORY);
  const data = await fetchAPI.json();
  // console.log(data);
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchAPI = await fetch(`${ENDPOINT_ID}${categoryId}&q=${query}`);
  const data = await fetchAPI.json();
  return data;
}

// getCategories().then((data) => console.log(data));
