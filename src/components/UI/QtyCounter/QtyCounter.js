import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../store/actions/productSelection";

const QtyCounter = (props) => {
  const dispatch = useDispatch();

  return (
    <QtyContainer>
    <button onClick={() => dispatch(removeFromCart(props.product.name))}>
        -
      </button>
      <span>{props.product.qty}</span>
      <button onClick={() => dispatch(addToCart(props.product.name))}>+</button>

    </QtyContainer>
  );
};

const QtyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  button {
    padding: 0.25rem 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
    background: #fff;
    border: none;
    border-radius: 5px;
  }
  span {
    font-weight: bold;
  }
  @media(max-width: 800px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
`;

export default QtyCounter;
