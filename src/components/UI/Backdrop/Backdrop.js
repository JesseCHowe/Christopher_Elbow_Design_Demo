import React from "react";
import styled from "styled-components";

const backdrop = props =>
  props.show ? <Backdrop onClick={props.clicked}></Backdrop> : null;

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
`;

export default backdrop;
