import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>TEST</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default Product;
