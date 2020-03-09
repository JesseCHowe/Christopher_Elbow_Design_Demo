import React from "react";
import styled from "styled-components";
import CategoryInfo from "./CategoryInfo/CategoryInfo";
import SubCategories from "./ProductList_FINAL/ProductList";

const categoryNav = props => {
  return (
    <CategoryNav>
      <CategoryInfo category={props.description} />
      <SubCategories
        category={props.category}
        url={props.url}
        all={props.all}
      />
    </CategoryNav>
  );
};

const CategoryNav = styled.div`
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  padding: 1rem;
  display: block;
  height: calc(100vh - 65px);
  border-right: 2px solid #efefef;
`;

export default categoryNav;
