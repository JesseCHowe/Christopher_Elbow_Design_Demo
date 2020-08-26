import React from "react";
import styled from "styled-components";
import SubCategories from "./ProductList";

const categoryNav = props => {
  return (
    <CategoryNav>
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
  border-right: 2px solid #efefef;
  box-sizing: border-box;
  color: #efefef;
  display: block;
  height: fit-content;
  max-width: 400px;
  padding: 1rem;
  position: sticky;
  top: 1rem;
  width: 100%;
  h1 {
    margin: 0;
    margin-bottom: 1rem;
  }
  @media (max-width: 750px) {
    border: 0;
    display: none;
    height: auto;
    max-width: 100%;
    position: relative;
  }
`;

export default categoryNav;
