import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartSummary from "../components/Cart/CartSummary/CartSummary";
import CartItems from "../components/Cart/CartBody/CartBody";

const Cart = () => {
  const products = useSelector(state => state.products);

  const total = products.reduce((previous, current) => {
    return previous + current.qty * current.price;
  }, 0);

  return (
    <React.Fragment>
      <CART_HEADER>
        <h1>Shopping Cart</h1>
      </CART_HEADER>
      <CART>
        <CartItems products={products} />
        <CartSummary total={total} />
      </CART>
    </React.Fragment>
  );
};

const CART = styled.div`
  align-items: start;
  display: flex;
  flex: 1;
  flex-wrap: wrap-reverse;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem;
`;

const CART_HEADER = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem;
  h1 {
    color: var(--elbowBrown);
    font-family: "EB Garamond", serif;
    font-weight: 300;
  }
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`;

export default Cart;
