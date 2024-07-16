import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, fetchListOfProducts } from "./api";
import { useState } from "react";

function ReactQueryDemo() {
  const [productTitle, setProductTitle] = useState("");

  const getQueryClient = useQueryClient();

  const { data: productList, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchListOfProducts(),
  });

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productList"]);
    },
  });

  async function handleAddNewProduct() {
    await handleAddNewProductMutation(productTitle);
    setProductTitle("");
  }

  if (isLoading) return <h1>Loading products ! Please wait</h1>;

  return (
    <div>
      <h1>React Query Demo</h1>
      <div>
        <input
          name="name"
          value={productTitle}
          onChange={(event) => setProductTitle(event.target.value)}
          placeholder="Enter product title"
        />
        <button
          onClick={handleAddNewProduct}
          disabled={productTitle.trim() === ""}
          type="button"
        >
          Add New Product
        </button>
      </div>
      <ul>
        {productList?.length > 0 ? (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h3>No product found</h3>
        )}
      </ul>
    </div>
  );
}

export default ReactQueryDemo;
