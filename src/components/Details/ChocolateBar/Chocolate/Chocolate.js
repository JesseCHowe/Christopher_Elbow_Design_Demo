import React from "react";
import styled, { keyframes } from "styled-components";

const chocolate = props => {
  return (
    <ChocolateStyled
      chocolateType={props.chocolateType}
      key={`${props.chocolateName}`}
    />
  );
};

let slideIn = keyframes`
0% {
  transform: translateX(-80%);
}
100% {
  transform: translateX(-0%);
}
`;

const ChocolateStyled = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 0;
  display: block;
  transform: translateX(-80%);
  animation: 1s ${slideIn} forwards;
  background-image: ${props =>
    `url(${require(`../../../../assets/chocolates/${props.chocolateType}.png`)})`};
  background-size: cover;
  background-position: right;
  width: 30%;
  height: 95%;
  margin: 0;
  padding: 0;
  z-index: 0;
`;

export default chocolate;
