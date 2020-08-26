import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const navSelection = props => (
  <LinkElem exact to={props.page} activeClassName="selectedConfection">
    {props.children}
  </LinkElem>
);

const LinkElem = styled(NavLink)`
  color: var(--elbowGray);
  display: block;
  font-weight: bold;
  padding: 0.15rem;
  position: relative;
  text-decoration: none;
  &.selectedConfection {
    color: var(--elbowWhite);
  }
  @media(max-width: 700px) {
    padding: 0.5rem 0;
    border-bottom: 1px solid gray;
    color: #000;
    &.selectedConfection {
      color: gray;
    }
  }
`;

export default navSelection;
