import React from "react";
import styled from "styled-components";
import NavSelection from "../UI/NavLink";

const productList = props => {
  let all;
  if (props.all) {
    all = (
      <li>
        <NavSelection page={props.url}>All</NavSelection>
      </li>
    );
  }
  return (
    <ButtonGroup>
      <ul>
        {all}
        {props.category.map(category => {
          const subUrl = category.url;
          return (
            <li key={category.name}>
              <NavSelection page={`${props.url}/${subUrl}`}>
                {category.name}
              </NavSelection>
            </li>         
          );
        })}
      </ul>
    </ButtonGroup>
  );
};

const ButtonGroup = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      font-size: 0.8rem;   
      margin-bottom: 1rem;
    }
  }
`;
export default productList;
