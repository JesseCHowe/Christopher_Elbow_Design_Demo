import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper/Wrapper";
import Chocolate from "./Chocolate/Chocolate";

const chocolateBar = props => {
  return (
    <ChocolateBar>
      <Wrapper product={props.product} />
      <Chocolate
        chocolateType={props.product.chocImg}
        chocolateName={props.product.name}
      />
    </ChocolateBar>
  );
};

const ChocolateBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  display: block;
  height: 550px;
  width: 100%;
  max-width: calc(550px * 0.73);
  @media (max-width: 450px) {
    min-width: 0px;
    height: 410px;
    max-width: 320px;
  }
`;

export default chocolateBar;
