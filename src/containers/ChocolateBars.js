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

  let testCategory = (
    <div>
      <span>Nothing</span>
    </div>
  );

  let testSigChocolate = <Spinner />;
  if (chocolateData) {
    testSigChocolate = <SignatureChocolateBars data={chocolateData} />;
  }
  if (descriptionData) {
    testCategory = (
      <CategoryNav
        category={chocolateData}
        url={path}
        description={descriptionData}
      />
    );
  }
  return (
    <PageContainer>
      {testCategory}
      <div className="content">
        <Route path={`${path}/:topicId?`}>{testSigChocolate}</Route>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: start;
  .content {
    margin-top: 60px;
  }
`;

export default ChocolateBars;
