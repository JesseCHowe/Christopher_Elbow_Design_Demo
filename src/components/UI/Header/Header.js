import React from "react";
import styled from "styled-components";

const Header = props => {
  return (
    <HEADER>
      <SUB_TITLE>{props.sub}</SUB_TITLE>
      <MAIN_TITLE>{props.title}</MAIN_TITLE>
      <p>
        {props.description}
      </p>
    </HEADER>
  )
}

const HEADER = styled.header`
width: fit-content;
max-width: 600px;
margin: 0 auto;
padding: 1rem;
font-weight: bold;
text-transform: uppercase;
font-family: 'Open Sans', sans-serif;
@media(max-width: 700px) {
  width: 100%;
}
`;

const SUB_TITLE = styled.span`
font-size: 1rem;
margin-bottom: 0;
color: gray;
display: block;
`;

const MAIN_TITLE = styled.h1`
font-size: 4rem;
color: #333;
margin: 0; 
padding: 0;
`;

export default Header;