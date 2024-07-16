import { useEffect } from "react";
import useCounter, { useActions } from "../store/use-counter";

function Products() {
  const productList = useCounter((state) => state.listOfProducts);

  const { fetchListOfProducts } = useActions();

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  console.log(productList);

  return (
    <div>
      <h1>List of Products</h1>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {productList?.length > 0 ? (
          productList.map((singleProductItem) => (
            <div key={singleProductItem.id}>
              <p>{singleProductItem?.title}</p>
              <img src={singleProductItem?.thumbnail} />
            </div>
          ))
        ) : (
          <h3>No products available</h3>
        )}
      </ul>
    </div>
  );
}

export default Products;
