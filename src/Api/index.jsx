  async function useGetProductsApi(){
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

  return data;
};

async function getSingleProduct(){
  const response = await fetch("https://fakestoreapi.com/products/1");
  const data = await response.json();

return data;
};


async function Users(){
  const response = await fetch  ("https://fakestoreapi.com/users/1");
  const jsonData = await response.json();
  
  return jsonData
}

async function categoriesApi(){
  const response = await fetch  ("https://fakestoreapi.com/products/categories");
  const jsonData = await response.json();

return jsonData
}

export { useGetProductsApi, Users, categoriesApi, getSingleProduct };