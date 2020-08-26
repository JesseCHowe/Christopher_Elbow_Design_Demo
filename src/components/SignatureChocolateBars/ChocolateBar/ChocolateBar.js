import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper/Wrapper";
import Chocolate from "./Chocolate/Chocolate";

const chocolateBar = (props) => {
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
  align-items: center;
  display: block;
  height: 550px;
  margin: 0 auto;
  max-width: calc(550px * 0.73);
  position: relative;
  width: 100%;
  @media (max-width: 450px) {
    height: 410px;
    max-width: 320px;
    min-width: 0px;
  }
`;

export default chocolateBar;
