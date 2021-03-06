import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Details from "./Details/Details";
import ChocolateBar from "./ChocolateBar/ChocolateBar";

const SignatureChocolateBars = props => {
  let ChocolateSelection = (
    <Placeholder>
      <h1>Please Select a Flavor</h1>
    </Placeholder>
  );
  const { topicId } = useParams();
  let [chocolateType] = props.data.filter(o => o.url === topicId);

  if (topicId) {
    ChocolateSelection = (
      <SignatureChocolateContainer>
        <ChocolateBar product={chocolateType} />
        <Details product={chocolateType} />
      </SignatureChocolateContainer>
    );
  }
  return <React.Fragment>{ChocolateSelection}</React.Fragment>;
};

const SignatureChocolateContainer = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  justify-items: center;
  align-items: center;
  @media (max-width: 950px) {
    display: block;
  }
`;

const Placeholder = styled.div`
  height: calc(100vh - var(--navHeight));
  margin: 0 auto;
  display: flex;
  align-items: center;
  h1 {
    padding: 1rem;
    text-align: center;
    margin: 0 auto;
    width: fit-content;
  }
  @media (max-width: 700px) {
    height: auto;
  }
`;

export default SignatureChocolateBars;
