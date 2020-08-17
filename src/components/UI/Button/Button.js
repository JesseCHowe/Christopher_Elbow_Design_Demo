import React from "react";
import styled from "styled-components";

const button = props => (
  <Button
    disabled={props.disabled}
    className={props.btnType}
    onClick={props.clicked}
  >
    {props.children}
  </Button>
);

const Button = styled.button`
  display: block;
  font-size: 1rem;
  background: none;
  border: 0;
  font-weight: bold;
  padding: 1rem;
  &.cart {
    background: #333;
    color: #efefef;
  }
  &.remove {
    padding: 0;
    background: none;
    display: inline-block;
    color: #ba0017;
    text-decoration: underline;
  }
  &:disabled {
    background: #efefef;
    color: #000;
  }
`;

export default button;
