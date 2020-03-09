import React from "react";
import { storeProducts } from "../../../data";
import styled from "styled-components";

const categoryInfo = props => {
  return (
    <ConfectionMenu>
      <h1>{props.category.category}</h1>
      <p>{props.category.desc}</p>
    </ConfectionMenu>
  );
};

const ConfectionMenu = styled.div`
  p {
    color: #333;
    margin-top: 0;
  }
  h1 {
    font-family: "EB Garamond", serif;
    font-weight: 300;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: #aaa;
      display: block;
    }
  }
`;

export default categoryInfo;
