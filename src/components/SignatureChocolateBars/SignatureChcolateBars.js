import React from "react";
import ProductList from "../ProductList/ProductList";
import Details from "../Details/Details";
import styled from "styled-components";

const SignatureChocolateBars = () => {
  return (
    <PageContainer>
      <ProductList />
      <Details />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  max-width: 1200px;
  margin: 0 auto;
`;
export default SignatureChocolateBars;
