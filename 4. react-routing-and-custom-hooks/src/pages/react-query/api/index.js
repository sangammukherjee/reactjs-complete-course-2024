const productList = [
  {
    title: "Product 1",
    id: 1,
  },
  {
    title: "Product 2",
    id: 2,
  },
  {
    title: "Product 3",
    id: 3,
  },
  {
    title: "Product 4",
    id: 4,
  },
  {
    title: "Product 5",
    id: 5,
  },
];

export const fetchListOfProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return productList;
};

export const addNewProduct = async (productName) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newlyCreatedProduct = {
    id: productList.length + 1,
    title: productName,
  };

  productList.push(newlyCreatedProduct);

  return newlyCreatedProduct;
};
