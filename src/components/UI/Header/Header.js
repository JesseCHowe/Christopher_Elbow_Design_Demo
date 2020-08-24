import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HEADER>
      <SUB_TITLE>{props.sub}</SUB_TITLE>
      <MAIN_TITLE>{props.title}</MAIN_TITLE>
      <p>{props.description}</p>
    </HEADER>
  );
};

const HEADER = styled.header`
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  margin: 0 auto;
  max-width: 700px;
  padding: 1rem;
  text-transform: uppercase;
  width: fit-content;
  @media (max-width: 700px) {
    width: 100%;
  }
  p {
    margin: 0;
    font-weight: 300;
    text-transform: none;
  }
`;

const SUB_TITLE = styled.span`
  color: gray;
  display: block;
  font-size: 1rem;
  margin-bottom: 0;
`;

const MAIN_TITLE = styled.h1`
  color: #333;
  font-size: 4rem;
  margin: 0;
  padding: 0;
  @media(max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export default Header;
