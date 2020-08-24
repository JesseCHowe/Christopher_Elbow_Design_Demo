import React from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard/ItemCard";
import { useParams } from "react-router-dom";

const Topic = props => {
  let categories;
  let { topicId } = useParams();
  if (topicId) {
    categories = props.category.filter(
      o => o.category2 === topicId.split("_").join(" ")
    );
  } else {
    categories = props.category;
  }
  return (
    <ItemsContainer>
      <div className={props.viewMode}>
      {categories.map(o => {
        return <ItemCard key={o.name} product={o} viewMode={props.viewMode}/>;
      })}
      </div>
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
.gallery {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  column-gap: 1rem;
  row-gap: 12px;
}
.list{
  display: block;
}
@media(max-width: 700px) {
  .gallery {
    display: block;
  }
}
`;

export default Topic;
