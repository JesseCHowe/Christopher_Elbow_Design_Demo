import React from "react";
import styled from "styled-components";

const backdrop = (props) =>
  props.show ? <Backdrop onClick={props.clicked}></Backdrop> : null;

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export default backdrop;
