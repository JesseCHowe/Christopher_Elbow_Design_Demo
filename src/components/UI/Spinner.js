import React from "react";
import styled, { keyframes } from "styled-components";
import data from "../../assets/data/bonbon";

const spinner = () => {
  const randomBonBon = Math.floor(Math.random() * 24);
  return (
    <BonBonSpinner>
      <BonBon choc={data[randomBonBon].img} />
    </BonBonSpinner>
  );
};

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

const BonBonSpinner = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 65px);
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  position: fixed;
  width: 100%;
`;

const BonBon = styled.div`
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-name: ${spin};
  animation-timing-function: linear;
  background-image: ${props =>
    `url(${require(`../../assets/bonbons/png/${props.choc}.png`)})`};
  background-repeat: no-repeat;
  background-size: contain;
  height: 150px;
  width: 150px;
`;

export default spinner;
