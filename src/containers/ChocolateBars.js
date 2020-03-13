import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, useRouteMatch } from "react-router-dom";
import CategoryNav from "../components/CategoryNav/CategoryNav";
import SignatureChocolateBars from "../components/SignatureChocolateBars/SignatureChocolateBars";
import axios from "../axios";
import Spinner from "../components/UI/Spinner/Spinner";

const ChocolateBars = () => {
  let [chocolateData, setChocolateData] = useState(null);
  let [descriptionData, setDescriptionData] = useState(null);

  const { path } = useRouteMatch();

  useEffect(() => {
    if (!chocolateData) {
      axios
        .get("https://christopher-elbow-demo.firebaseio.com/data.json")
        .then(response => {
          return response.data;
        })
        .then(data => {
          let chocolateBars = data.products.filter(
            o => o.category === "ChocolateBars"
          );
          setChocolateData(chocolateBars);
          let [description] = data.descriptions.filter(
            o => o.category === "Signature Chocolate Bars"
          );
          setDescriptionData(description);
        });
    }
  });

  let category;

  let signatureChocolate = <Spinner />;
  if (chocolateData) {
    signatureChocolate = <SignatureChocolateBars data={chocolateData} />;
  }
  if (descriptionData) {
    category = (
      <CategoryNav
        category={chocolateData}
        url={path}
        description={descriptionData}
      />
    );
  }
  return (
    <PageContainer>
      {category}
      <div className="content">
        <Route path={`${path}/:topicId?`}>{signatureChocolate}</Route>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  align-items: start;
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  // .content {
  //   margin-top: 60px;
  // }
  @media (max-width: 750px) {
    display: block;
    // max-width: 100%;
    // .content {
    //   margin-top: 0;
    // }
  }
`;

export default ChocolateBars;
