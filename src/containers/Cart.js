import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartSummary from "../components/Cart/CartSummary/CartSummary";
import CartItems from "../components/Cart/CartBody/CartBody";

const Cart = () => {
  const products = useSelector((state) => state.products);

  const total = products.reduce((previous, current) => {
    return previous + current.qty * current.price;
  }, 0);

  return (
    <React.Fragment>
      <CART_HEADER>
      <Confections>
    <h2><span className="signature">MY</span>Shopping Cart</h2>
</Confections>
      </CART_HEADER>
      <CART>
        <CartItems products={products} />
        <CartSummary total={total} />
      </CART>
    </React.Fragment>
  );
};

const Confections = styled.div`
h2 {
  font-family: 'Open Sans', sans-serif;
      text-transform: uppercase;
    font-size: 4rem;
    font-weight: bold;
    color: #333;
    margin: 0;
    padding: 0;
  }
  .signature {
    font-size: 1rem;
    margin-bottom: 0;
    color: gray;
    display: block;
    text-align: left;
  }  
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  @media(max-width: 550px) {
    max-width: 400px;
    margin: 0 auto;
    h2 {
      font-size: 2rem;
      text-align: left;
    }
  }
`;
const CART = styled.div`
  align-items: start;
  display: flex;
  flex: 1;
  flex-wrap: wrap-reverse;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem;
  @media (max-width: 750px) {
    padding: 0;
  }
`;

const CART_HEADER = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 1200px;
  padding: 1rem;
  h1 {
    color: #333;
    text-align: center;
  }
  @media (max-width: 750px) {
    margin-left: 1rem;
  }
`;

export default Cart;
