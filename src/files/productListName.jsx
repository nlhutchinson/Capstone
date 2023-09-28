import React from "react";
// import { useNavigate } from "react-router-dom";

export default function ProductListName({ product }) {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{product.title}</h3>
      <button
        onClick={() => {
          navigate(`/${product.id}`);
        }}
      >
        Details
      </button>
    </div>
  );
}