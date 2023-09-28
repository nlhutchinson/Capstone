import { useState, useEffect } from "react";
import { fetchAllProducts } from "../api";
import ProductListName from "./productListName";
import CreateProductForm from "./createProductForm";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllProducts() {
      const APIResponse = await fetchAllProducts();
      if (APIResponse) {
        setProducts(APIResponse);
      } else {
        setError("getAllProductsError");
      }
    }
    getAllProducts();
  }, []);

  const productsToDisplay = searchParam
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchParam)
      )
    : products;
  return (
    <div>
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      <CreateProductForm products={products} setProducts={setProducts} />
      {error && <p>{error}</p>}
      {productsToDisplay.map((product) => {
        return <ProductListName key={product.id} product={product} />;
      })}
    </div>
  );
}