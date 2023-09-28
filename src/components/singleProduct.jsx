import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../api";
import ProductCard from "./productCard";

export default function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSingleProduct() {
      const APIResponse = await fetchSingleProduct(id);
      if (APIResponse) {
        setProduct(APIResponse);
      } else {
        setError("error");
      }
    }
    getSingleProduct();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {product && <ProductCard product={product} />}
    </div>
  );
}