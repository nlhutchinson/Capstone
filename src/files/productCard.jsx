import React from "react";
// import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../api";
import styles from "../css/productCard.css";

export default function ProductCard({product}) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deletePlayer(id);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <figure>
        <img
          className={styles.img}
          src={product.image}
        />
        <figcaption>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </figcaption>
      </figure>
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
}