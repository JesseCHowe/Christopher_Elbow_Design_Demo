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
  &.cart {
    background: #533118;
    color: #efefef;
  }
  &.remove {
    background: #ba0017;
    color: #efefef;
  }
  &:disabled {
    background: #efefef;
    color: #000;
  }
`;

export default button;
