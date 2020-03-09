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
  // width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 450px;
  width: 335px;
`;

export default chocolateBar;
