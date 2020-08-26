import React from "react";
import styled, { keyframes } from "styled-components";

const chocolate = (props) => {
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
  animation: 1s ${slideIn} forwards;
  background-image: ${(props) =>
    `url(${require(`../../../../assets/chocolates/${props.chocolateType}.png`)})`};
  background-position: right;
  background-size: cover;
  box-sizing: border-box;
  display: block;
  height: 98%;
  margin: 0;
  position: absolute;
  right: 0;
  transform: translateX(-80%);
  top: 1%;
  width: 30%;
  z-index: 0;
`;

export default chocolate;
