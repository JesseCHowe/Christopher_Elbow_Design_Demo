import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import CategoryNav from "../components/CategoryNav/CategoryNav";
import Topic from "../components/Topic/Topic";
import axios from "../axios";
import Spinner from "../components/UI/Spinner/Spinner";

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

  let testCategory = (
    <div>
      <span>Nothing</span>
    </div>
  );

  let testConfections = <Spinner />;
  if (confectionData && descriptionData) {
    const unique = [...new Set(confectionData.map(item => item.category2))];
    let confectionCatNav = unique.map(o => {
      return {
        name: o,
        url: o.split(" ").join("_")
      };
    });
    testCategory = (
      <CategoryNav
        category={confectionCatNav}
        description={descriptionData}
        url={path}
        all="true"
      />
    );
    testConfections = <Topic category={confectionData} />;
  }

  if (descriptionData) {
  }

  return (
    <ConfectionsContainer>
      {testCategory}
      <Route path={`${path}/:topicId?`}>{testConfections}</Route>
    </ConfectionsContainer>
  );
};

const ConfectionsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 35% auto;
  }
`;

export default Confections;
