import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartSummary from "../components/Cart/CartSummary";
import CartItems from "../components/Cart/CartBody";
import Header from "../components/UI/Header";

const Cart = () => {
  const products = useSelector((state) => state.products);
  const total = products.reduce((previous, current) => {
    return previous + current.qty * current.price;
  }, 0);

  return (
    <CART_BODY>
      <Header sub={"My"} title={"CART"}/>
      <CART>
        <CartSummary total={total} />
        <CartItems products={products} />
      </CART>
    </CART_BODY>
  );
};

const CART_BODY = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
`;

const CART = styled.div`
column-gap: 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  @media (max-width: 700px) {
    display: block;
  }
`;

export default Cart;
