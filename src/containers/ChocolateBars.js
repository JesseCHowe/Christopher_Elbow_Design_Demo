import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, useRouteMatch } from "react-router-dom";
import CategoryNav from "../components/CategoryNav/CategoryNav";
import SignatureChocolateBars from "../components/SignatureChocolateBars/SignatureChocolateBars";
import axios from "../axios";
import Spinner from "../components/UI/Spinner";
import Dropdown from "../components/UI/Dropdown";
import Header from "../components/UI/Header";

const ChocolateBars = () => {
  let [chocolateData, setChocolateData] = useState(null);
  let [descriptionData, setDescriptionData] = useState(null);

  const { path } = useRouteMatch();

  useEffect(() => {
    if (!chocolateData) {
      axios
        .get("https://christopher-elbow-demo.firebaseio.com/data.json")
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          let chocolateBars = data.products.filter(
            (o) => o.category === "ChocolateBars"
          );
          setChocolateData(chocolateBars);
          let [description] = data.descriptions.filter(
            (o) => o.category === "Signature Chocolate Bars"
          );
          setDescriptionData(description);
        });
    }
  });

  let category;
  let newDrop;
  let signatureChocolate = <Spinner />;
  if (chocolateData) {
    signatureChocolate = <SignatureChocolateBars data={chocolateData} />;
    newDrop = (
      <Dropdown
        all="false"
        category={chocolateData}
        url={path}
        description={descriptionData}
      />
    );
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
    <React.Fragment>
      <Header
        sub={"signature"}
        title={"Chocolate Bars"}
        description={
          "Our chocolate bars are crafted with the same meticulous care as our beautiful chocolate bonbons. We offer both our signature bar and our craft chocolate bar collections, both using only the finest ingredients."
        }
      />
      <PageContainer>
        {category}
        {newDrop}
        <div className="content">
          <Route path={`${path}/:topicId?`}>{signatureChocolate}</Route>
        </div>
      </PageContainer>
    </React.Fragment>
  );
};

const PageContainer = styled.div`
  column-gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 1rem auto;
  padding: 0 2rem;
  max-width: 1200px;
  @media (max-width: 750px) {
    display: block;
    margin: 1rem auto;
  }
`;

export default ChocolateBars;
