import React from "react";
import styled from "styled-components";
import logo from "../../../../logo.svg";

const wrapper = props => {
  const chocolateColor = props.product.chocColor;
  console.log(chocolateColor);
  return (
    <Wrapper chocolateColor={chocolateColor}>
      <Logo />
      <Brand>
        <h2>Christopher Elbow</h2>
        <span>CHOCOLATES</span>
      </Brand>
      <p>{props.product.name}</p>
    </Wrapper>
  );
};

const Logo = styled.div`
  box-sizing: border-box;
  width: 2.55rem;
  height: 2.55rem;
  margin: 0 auto;
  margin-top: 2.8rem;
  margin-bottom: 0.75rem;
  background: none;
  border: 2px solid #533118;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    display: block;
    width: 2.2rem;
    height: 2.2rem;
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
  border: 1px solid gray;
  box-shadow: 8px 0px 4px -4px #000;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 30%;
    height: 50%;
    background: ${props => props.chocolateColor};
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
    text-transform: uppercase;

    font-weight: bold;
    font-size: 0.78rem;
    font-family: Arial;
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
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    margin: 0;
  }
  span {
    margin-top: 0.4rem;
    display: block;
    text-align: center;
    color: #523e35;
    font-family: Arial;

    font-size: 0.6rem;
    font-weight: 300;
  }
`;

export default wrapper;
