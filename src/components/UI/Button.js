import React from "react";
import styled from "styled-components";

const button = (props) => (
  <Button
    className={props.btnType}
    disabled={props.disabled}
    onClick={props.clicked}
  >
    {props.children}
  </Button>
);

const Button = styled.button`
  background: none;
  border: 0;
  display: block;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 1rem;
  text-transform: uppercase;

  &.cart {
    background: #333;
    color: #efefef;
  }
  &.remove {
    background: none;
    color: #ba0017;
    display: inline-block;
    padding: 0;
    text-decoration: underline;
  }
  &:disabled {
    background: #efefef;
    color: gray;
  }
`;

export default button;
