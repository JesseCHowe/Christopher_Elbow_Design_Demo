import React, { useState } from "react";
import styled from "styled-components";
import CategoryInfo from "./CategoryInfo/CategoryInfo";
import SubCategories from "./ProductList_FINAL/ProductList";

const categoryNav = props => {
  return (
    <CategoryNav>
      {/* <CategoryInfo category={props.description} /> */}
      <h1>Categories</h1>
      <SubCategories
        category={props.category}
        url={props.url}
        all={props.all}
      />
    </CategoryNav>
  );
};

const CategoryNav = styled.div`
  background: #333;
  color: #efefef;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  position: sticky;
  top: 1rem;
  padding: 1rem;
  display: block;
  height: fit-content;
  border-right: 2px solid #efefef;
  h1 {
    margin: 0;
    margin-bottom: 1rem;
  }
  @media (max-width: 750px) {
    position: relative;
    height: auto;
    max-width: 100%;
    border: 0;
    display: none;
  }
`;

export default categoryNav;
