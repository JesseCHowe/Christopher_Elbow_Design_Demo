import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import axios from "../axios";
import styled from "styled-components";
import CategoryNav from "../components/CategoryNav/CategoryNav";
import Spinner from "../components/UI/Spinner/Spinner";
import Topic from "../components/Topic/Topic";

const Confections = () => {
  let [confectionData, setConfectionData] = useState(null);
  let [descriptionData, setDescriptionData] = useState(null);
  const { path } = useRouteMatch();

  useEffect(() => {
    if (!confectionData) {
      axios
        .get("https://christopher-elbow-demo.firebaseio.com/data.json")
        .then(response => {
          return response.data;
        })
        .then(data => {
          const confections = data.products.filter(
            o => o.category === "Confections"
          );
          setConfectionData(confections);
          let [description] = data.descriptions.filter(
            o => o.category === "Confections"
          );
          setDescriptionData(description);
        });
    }
  });

  let category;
  let confections = <Spinner />;

  if (confectionData && descriptionData) {
    const unique = [...new Set(confectionData.map(item => item.category2))];
    let confectionCatNav = unique.map(o => {
      return {
        name: o,
        url: o.split(" ").join("_")
      };
    });
    category = (
      <CategoryNav
        all="true"
        category={confectionCatNav}
        description={descriptionData}
        url={path}
      />
    );
    confections = <Topic category={confectionData} />;
  }

  return (
    <ConfectionsContainer>
      {category}
      <Route path={`${path}/:topicId?`}>{confections}</Route>
    </ConfectionsContainer>
  );
};

const ConfectionsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 auto;
  max-width: 1200px;
  @media (max-width: 750px) {
    display: block;
  }
`;

export default Confections;
