import React from "react";
import styled, { keyframes } from "styled-components";

const spinner = () => {
  const flavors = [
    "persia",
    "salted-banana-caramel",
    "blood-orange",
    "fleur-de-sel-caramel",
    "pistachio-bergamot",
    "lavendar-caramel",
    "extra-dark",
    "salted-hazlenut-praline",
    "passion-fruit-caramel",
    "ecuadaor",
    "raspberry",
    "rosemary",
    "venezuelan-dark",
    "vanilla-bean",
    "venezuelan-spice",
    "coffee-caramel",
    "champagne",
    "butterscotch-bourbon",
    "strawberry-balsamic",
    "cinnamon-dulce-de-leche",
    "kalamansi-lime",
    "coconut-caramel",
    "violet-cassis",
    "fresh-lemon"
  ];

  const randomBonBon = Math.floor(Math.random() * 24);
  return (
    <BonBonSpinner>
      <BonBon choc={flavors[randomBonBon]} />
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
    `url(${require(`../../../assets/bonbons/${props.choc}.jpg`)})`};
  background-repeat: no-repeat;
  background-size: cover;
  border: 0px solid red;
  display: block;
  height: 150px;
  width: 150px;
`;

export default spinner;
