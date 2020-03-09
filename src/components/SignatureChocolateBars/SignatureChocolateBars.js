import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Details from "./Details/Details";
import ChocolateBar from "./ChocolateBar/ChocolateBar";

const SignatureChocolateBars = props => {
  let ChocolateSelection = <h1>Please Select a Flavor</h1>;
  const { topicId } = useParams();
  let [chocolateType] = props.data.filter(o => o.url === topicId);

  if (topicId) {
    ChocolateSelection = (
      <React.Fragment>
        <ChocolateBar product={chocolateType} />
        <Details product={chocolateType} />
      </React.Fragment>
    );
  }
  return (
    <SignatureChocolateContainer>
      {ChocolateSelection}
    </SignatureChocolateContainer>
  );
};

const SignatureChocolateContainer = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
`;

export default SignatureChocolateBars;
