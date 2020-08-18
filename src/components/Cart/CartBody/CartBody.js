import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";

const CartBody = (props) => {
  return (
    <CART_BODY>
      <tbody>
        {props.products.map((product) => {
          return <CartItem key={product.name} product={product} />;
        })}
      </tbody>
    </CART_BODY>
  );
};

const CART_BODY = styled.table`
  flex: 3;
  width: 100%;
  border-collapse: collapse;
`;

export default CartBody;
