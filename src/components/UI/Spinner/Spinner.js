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
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 65px);
  // background: coral;
  // border 10px solid lightblue;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BonBon = styled.div`
  display: block;
  width: 150px;
  height: 150px;
  animation-name: ${spin};
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-image: ${props =>
    `url(${require(`../../../assets/bonbons/${props.choc}.jpg`)})`};
  background-size: cover;
  background-repeat: no-repeat;

  border: 0px solid red;
`;

export default spinner;
// background-image: `url(${require(`../../../assets/bonbons${props => props.choc}.jpg`)})`
// background-image: url(https://www.elbowchocolates.com/media/wysiwyg/fleur.jpg");
