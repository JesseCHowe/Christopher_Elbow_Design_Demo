import React from "react";
import styled from "styled-components";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";

const Topic = props => {
  let categories;
  let { topicId } = useParams();
  if (topicId) {
    categories = props.category.filter(
      o => o.category2 == topicId.split("_").join(" ")
    );
  } else {
    categories = props.category;
  }
  return (
    <ItemsContainer>
      {categories.map(o => {
        return <ItemCard key={o.name} product={o} />;
      })}
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 50% 50%;
  text-align: center;
  align-items: start;
  width: 100%;
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export default Topic;
