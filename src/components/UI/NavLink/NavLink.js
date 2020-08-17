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
  position: relative;
  text-decoration: none;
  font-weight: bold;
  padding: 0.15rem;
  &::before {
    background: var(--elbowBrown);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: 0.5s;
    width: 0%;
    z-index: -1;
  }
  &.selectedConfection {
    color: var(--elbowWhite);
  }
`;

export default navSelection;
