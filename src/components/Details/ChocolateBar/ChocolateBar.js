import React, { useEffect, useRef } from "react";
import logo from "../../../logo.svg";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Chocolate from "./Chocolate/Chocolate";

const ChocolateBar = () => {
  const newChocolate = useSelector(
    state => state.products[state.productSelection].color
  );

  const name = useSelector(
    state => state.products[state.productSelection].wrapper
  );

  const chocolateType = useSelector(
    state => state.products[state.productSelection].chocolate
  );

  const prevChocolateRef = useRef();
  useEffect(() => {
    prevChocolateRef.current = newChocolate;
  });

  const prevChocolate = prevChocolateRef.current || "#829bd1";

  return (
    <ChocolateSelection>
      <Wrapper prevChocolate={prevChocolate}>
        <Logo />
        <Brand>
          <h2>Christopher Elbow</h2>
          <span>CHOCOLATES</span>
        </Brand>
        <p>{name}</p>
      </Wrapper>
      <Chocolate chocolateType={chocolateType} chocolateName={name} />
    </ChocolateSelection>
  );
};

const ChocolateSelection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.div`
  box-sizing: border-box;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  background: none;
  border: 2px solid #533118;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 2rem auto;
    background: #533118;
    background-image: url(${logo});
    background-position: center;
    background-size: 40%;
    background-repeat: no-repeat;
  }
`;

const Wrapper = styled.div`
  position: absolute;

  left: 0;
  width: 70%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 10;
  background: #f1f0ec;
  border-radius: 5px;
  box-shadow: 8px 0px 4px -4px #000;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 35%;
    height: 50%;
    background: ${props => props.prevChocolate};
    bottom: 0;
    left: 32.5%;
    z-index: 20;
  }

  p {
    box-sizing: border-box;
    position: absolute;
    width: 95%;
    text-align: center;
    z-index: 30;
    top: 65%;
    font-weight: 600;
    font-size: 0.65rem;
    font-family: "Cabin", sans-serif;
    letter-spacing: 0.07rem;
    margin: 0 auto;
    padding: 0.75em;
    color: #523e35;
    background: #f1f0ec;
  }
`;

const Brand = styled.div`
  margin: 0;
  padding: 0;
  h2 {
    font-family: "EB Garamond", serif;
    color: #533118;
    font-size: 1.15rem;
    font-weight: 500;
    text-align: center;
    margin: 0;
  }
  span {
    margin-top: 0.2rem;
    display: block;
    text-align: center;
    color: #523e35;
    font-family: "Cabin", sans-serif;

    font-size: 0.3rem;
    font-weight: 300;
  }
`;

export default ChocolateBar;
