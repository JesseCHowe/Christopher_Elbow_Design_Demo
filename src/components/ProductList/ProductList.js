import React, { useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";
import styled from "styled-components";

const ProductList = () => {
  const products = useSelector(state => state.products);
  let [whichDisplay, setDisplay] = useState("none");

  return (
    <ProductSelection>
      <DropDown>
        <DropBtn
          onClick={() => setDisplay(whichDisplay === "none" ? "block" : "none")}
        >
          <span>Signature Chocolates</span>
        </DropBtn>
        <DropContent>
          {Object.keys(products).map(product => {
            return (
              <Product key={products[product].id} product={products[product]} />
            );
          })}
        </DropContent>
      </DropDown>
    </ProductSelection>
  );
};

const ProductSelection = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  min-width: 300px;
  box-sizing: border-box;
  padding: 1rem;
`;

const DropDown = styled.div`
  position: relative;
  width: 100%;
`;

const DropBtn = styled.div`
  cursor: pointer;
  font-size: 26px;
  border: none;
  outline: none;
  color: #000;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  padding: 0;
  span {
    font-family: "EB Garamond", serif;
    border-bottom: 1px solid #533118;
    display: block;
    padding-bottom: 0.25rem;
    color: #533118;
  }
  hr {
    margin: 0;
  }
`;

let DropContent = styled.div`
  > * {
    border-bottom: 1px solid #ccc;
  }
  > *:last-child {
    border-bottom: 0;
  }
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export default ProductList;
