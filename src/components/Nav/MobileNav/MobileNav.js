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
        <ExpandButton
          className="expndBtn"
          onClick={() => setViewMobile(true)}
        >
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
  @media (min-width: 700px) {
    display: none;
  }
`;
const ExpandButton = styled.button`
  font-size: 1.5rem;
  border: none;
  padding: 1rem;
`;

const Nav = styled.div`
  background: #333;
  width: 75%;
  left: ${(props) => props.myTest}%;
  top: 0;
  position: fixed;
  height: 100vh;
  display: block;
  z-index: 200;
  color: #fff;
  ul {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    list-style-type: none;
    padding: 0.5rem;
    font-size: 0.85rem;
  }
  a {
    text-decoration: none;
  }
  span {
    color: #fff;
    font-size: 1rem;
  }
`;

export default MobileNav;
