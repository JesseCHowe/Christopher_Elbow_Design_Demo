import React from "react";
import sortFunctions from "../sortFunctions";
import { useSelector } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import CategoryNav from "../../CategoryNav/CategoryNav";
import styled from "styled-components";
import DisplayController from "./DisplayController/DisplayController";
import Dropdown from "../../UI/Dropdown/Dropdown";
import ItemCards from "./ItemsCards/ItemCards";

const ConfectionBody = (props) => {
  const sortMode = useSelector((state) => state.confections.sort);
  const { path } = useRouteMatch();
  const viewMode = useSelector((state) => state.confections.view);

  const unique = [
    ...new Set(
      props.confectionData
        .sort(sortFunctions[sortMode].func)
        .map((item) => item.category2)
    ),
  ];

  const confectionCatNav = unique.sort().map((o) => {
    return {
      name: o,
      url: o.split(" ").join("_"),
    };
  });

  return (
    <ConfectionWrapper>
      <DisplayController clicked={props.clicked} />
      <ConfectionsContainer>
        <Dropdown all="true" category={confectionCatNav} url={path} />
        <CategoryNav all="true" category={confectionCatNav} url={path} />
        <Route path={`${path}/:topicId?`}>
          <ItemCards category={props.confectionData} viewMode={viewMode} />
        </Route>
      </ConfectionsContainer>
    </ConfectionWrapper>
  );
};

const ConfectionWrapper = styled.div`
  padding: 1rem;
`;

const ConfectionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: border-box;
  @media (max-width: 750px) {
    display: block;
  }
`;

export default ConfectionBody;
