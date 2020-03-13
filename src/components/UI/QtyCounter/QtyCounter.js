import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart
} from "../../../store/actions/productSelection";

const QtyCounter = props => {
  const dispatch = useDispatch();

  return (
    <QtyContainer>
      <button onClick={() => dispatch(removeFromCart(props.product.name))}>
        -
      </button>
      {props.product.qty}
      <button onClick={() => dispatch(addToCart(props.product.name))}>+</button>
    </QtyContainer>
  );
};

const QtyContainer = styled.div`
  min-width: 100px;
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    font-size: 1rem;
    background: none;
    border: 0;
  }
`;

export default QtyCounter;
