// Requisito 01
const ENDPOINT_CATEGORY = 'https://api.mercadolibre.com/sites/MLB/categories';
const ENDPOINT_ID = 'https://api.mercadolibre.com/sites/MLB/search?category=';
const ENDPOINT_QUERY = 'https://api.mercadolibre.com/sites/MLB/search?q=';

// https://api.mercadolibre.com/items/$PRODUCT_ID

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

export async function getProductFromQuery(query) {
  const fetchAPI = await fetch(`${ENDPOINT_QUERY}${query}`);
  const data = await fetchAPI.json();
  return data;
}

export async function getProductsFromCategory(category) {
  const response = await fetch(`${ENDPOINT_ID}${category}`);
  const data = await response.json();
  return data;
}

export async function getProductsById(productId) {
  const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const data = await response.json();
  return data;
}
