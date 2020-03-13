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
  height: 450px;
  width: 100%;
  display: block;
  max-width: 335px;
  @media (max-width: 750px) {
    min-width: 0px;
    max-width: 320px;
  }
`;

export default chocolateBar;
