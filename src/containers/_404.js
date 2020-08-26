import React from "react";
import styled from "styled-components";

const _404 = () => {
  return (
    <Oops>
      <h1>404</h1>
    </Oops>
  )
}

const Oops = styled.div`
background-image: url('https://media.timeout.com/images/105645102/image.jpg');
background-size: cover;
widtH 100%;
height: calc(100vh - var(--navHeight));
display: flex;
align-items: center;
justify-content: center;
h1 {
  font-size: 5rem;
  color: #fff;
}
`;

export default _404;
