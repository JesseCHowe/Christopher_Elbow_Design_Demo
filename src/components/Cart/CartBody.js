import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

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
  border-collapse: collapse;
  border: 1px solid var(--elbowGray);
  flex: 3;
  width: 100%;
`;

export default CartBody;
