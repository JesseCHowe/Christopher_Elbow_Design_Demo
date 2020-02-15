import React from "react";
import { useDispatch } from "react-redux";
import { selectChocolate } from "../../../store/actions/productSelection";
import styled from "styled-components";

const Product = props => {
  const dispatch = useDispatch();

  function showDetail(product) {
    dispatch(selectChocolate(props.product.title));
  }

  return (
    <ProductWrapper color={props.product.color}>
      <button
        className={props.product.wrapper.split(" ").join("_")}
        onClick={() => showDetail(props.product.title)}
      >
        <span>{props.product.title}</span>
      </button>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  flex-grow: 1;
  button {
    height: 100%;
    margin: 0;
    border: 0;
    width: 100%;
    color: #000;
    font-weight: bold;
    min-height: 40px;
    text-align: left;
    background: none;
    position: relative;
    span {
      margin-left: 0.5rem;
      display: block;
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      background-color: ${props => props.color};
      z-index: -1;
      transition: 0.5s;
    }
    &:focus {
      outline: none;
      color: #fff;
      &::before {
        width: 100%;
      }
    }
  }
  .CREME_BRÛLÉE,
  .TOASTED_ALMOND_with_MAYAN_SEA_SALT,
  .DARK_ROCKS,
  .COFFEE_CARDAMOM {
    &:focus {
      color: #000;
    }
  }
`;

export default Product;
