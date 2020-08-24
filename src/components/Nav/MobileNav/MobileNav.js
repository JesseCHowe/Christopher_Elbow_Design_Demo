import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  let [viewMobile, setViewMobile] = useState(false);
  const products = useSelector((state) => state.products);
  const total = products.reduce(
    (previous, current) => previous + current.qty,
    0
  );

  return (
    <React.Fragment>
      <Backdrop show={viewMobile} clicked={() => setViewMobile(false)} />
      <NavWrapper>
        <ExpandButton className="expndBtn" onClick={() => setViewMobile(true)}>
          <FontAwesomeIcon icon={faBars} />
        </ExpandButton>
        <Nav myTest={`${viewMobile ? "0" : "-100"}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className="aLink"
                activeClassName="selected"
                onClick={() => setViewMobile(false)}
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chocolate-bars/cherry-streusel-bar"
                className="aLink"
                activeClassName="selected"
                onClick={() => setViewMobile(false)}
              >
                <span>Chocolate Bars</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/artisan-confections"
                className="aLink"
                activeClassName="selected"
                onClick={() => setViewMobile(false)}
              >
                <span>Confections</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bonbons"
                className="aLink"
                activeClassName="selected"
                onClick={() => setViewMobile(false)}
              >
                <span>Bonbons</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="aLink"
                activeClassName="selected"
                onClick={() => setViewMobile(false)}
              >
                <span>Cart ({total})</span>
              </NavLink>
            </li>
          </ul>
        </Nav>
      </NavWrapper>
    </React.Fragment>
  );
};

const NavWrapper = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;
const ExpandButton = styled.button`
  font-size: 1.5rem;
  border: none;
  padding: 1rem;
  background: none;
`;

const Nav = styled.div`
  left: ${(props) => props.myTest}%;
  top: 0;
  transition: 1s;
  text-transform: uppercase;
  background: #fff;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.3);
  z-index: 500;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  position: fixed;
  transition: 1s;
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      border: 0;
      border-bottom: 1px solid #333;
      display: block;
      padding: 1rem;
      text-align: left;
    }
  }
  a {
    text-decoration: none;
  }
  span {
    color: #000;
    font-size: 1rem;
  }
`;

export default MobileNav;
