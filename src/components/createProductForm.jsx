import React, { useState } from "react";
import { createProduct } from "../api";

export default function CreateProductForm({ products, setProducts }) {
  const [title, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const APIData = await createProduct(title, price);
    if (APIData) {
      console.log("New Product: ", APIData);

      const newProductsList = [...products, APIData];
      setProducts(newProductsList);

      setName("");
      setPrice("");
    } else {
      setError("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        value={title}
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={price}
        type="text"
        name="price"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}