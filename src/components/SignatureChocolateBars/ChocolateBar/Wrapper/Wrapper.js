import React from "react";
import styled from "styled-components";
import logo from "../../../../assets/logo/wrapper-logo.svg";

const wrapper = (props) => {
  const chocolateColor = props.product.chocColor;
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

const Brand = styled.div`
  margin: 0;
  padding: 0;
  h2 {
    color: #533118;
    font-family: "EB Garamond", serif;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
    text-align: center;
  }
  span {
    color: #523e35;
    display: block;
    font-family: Arial;
    font-size: 0.6rem;
    font-weight: 300;
    margin-top: 0.4rem;
    text-align: center;
  }
`;

const Logo = styled.div`
  align-items: center;
  background: none;
  border: 2px solid #533118;
  box-sizing: border-box;
  display: flex;
  height: 2.55rem;
  margin: 0 auto;
  margin-bottom: 0.75rem;
  margin-top: 2.8rem;
  width: 2.55rem;
  &::after {
    background: #533118;
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40%;
    content: "";
    display: block;
    height: 2.2rem;
    margin: 2rem auto;
    width: 2.2rem;
  }
`;

const Wrapper = styled.div`
  background: #f1f0ec;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 8px 0px 8px -8px #000;
  height: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 70%;
  z-index: 10;
  &::before {
    background: ${(props) => props.chocolateColor};
    bottom: 0;
    content: "";
    display: block;
    height: 50%;
    left: 32.5%;
    position: absolute;
    width: 30%;
    z-index: 20;
  }
  p {
    background: #f1f0ec;
    box-sizing: border-box;
    color: #523e35;
    font-family: Arial;
    font-size: 0.78rem;
    font-weight: bold;
    letter-spacing: 0.07rem;
    margin: 0 auto;
    padding: 0.75em;
    position: absolute;
    text-align: center;
    top: 65%;
    text-transform: uppercase;
    width: 95%;
    z-index: 30;
  }
`;

export default wrapper;
