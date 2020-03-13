import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logoMobile from "../../assets/logo/logo-mobile.svg";
import logo from "../../assets/logo/logo.svg";
import Backdrop from "../UI/Backdrop/Backdrop";

const Nav = () => {
  let [viewMobile, setViewMobile] = useState(false);

  return (
    <React.Fragment>
      <Backdrop show={viewMobile} clicked={() => setViewMobile(false)} />
      <NavWrapper>
        <Link className="nav__link" to="/">
          <Logo />
          <h1>
            Christopher Elbow <br />
            <span>CHOCOLATES</span>
          </h1>
        </Link>
        <Products inView={viewMobile}>
          <ul>
            <li>
              <NavLink
                to="/chocolate-bars"
                className="aLink"
                activeClassName="selected"
              >
                <span>Chocolate Bars</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/artisan-confections"
                className="aLink"
                activeClassName="selected"
              >
                <span>Confections</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bonbons"
                className="aLink"
                activeClassName="selected"
              >
                <span>Bonbons</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="aLink" activeClassName="selected">
                <span>Cart</span>
              </NavLink>
            </li>
          </ul>
        </Products>
        <ExpandButton className="expndBtn" onClick={() => setViewMobile(true)}>
          <div></div>
        </ExpandButton>
      </NavWrapper>
    </React.Fragment>
  );
};

const ExpandButton = styled.button`
  display: none;
  position: absolute;
  width: 50px;
  height: 50px;
  border: 0;
  box-sizing: border-box;
  left: 0;
  padding: 0.6rem;
  &::before {
    content: "";
    display: block;
    background: #533118;
    width: 100%;
    height: 3px;
    margin-bottom: 0.35rem;
  }
  div {
    background: #533118;
    width: 100%;
    height: 3px;
  }
  &::after {
    content: "";
    display: block;
    background: #533118;
    width: 80%;
    height: 3px;
    margin-top: 0.35rem;
  }
  @media (max-width: 700px) {
    display: block;
  }
`;

const Logo = styled.div`
  box-sizing: border-box;
  float: left;
  width: 3.5rem;
  height: 3.5rem;
  background: none;
  border: 2px solid #533118;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 2rem auto;
    background: #533118;
    background-image: url(${logo});
    background-position: center;
    background-size: 40%;
    background-repeat: no-repeat;
  }
  // @media (max-width: 700px) {
  //   border: 2px solid #efefef;
  //   &::after {
  //     background: #efefef;
  //     background-image: url(${logoMobile});
  //     background-position: center;
  //     background-size: 40%;
  //     background-repeat: no-repeat;
  //   }
  // }
`;

const NavWrapper = styled.nav`
  top: 0;
  height: 65px;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  .nav__link {
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    svg {
      fill: #fff;
    }
    span {
      font-size: 0.5rem;
      display: block;
      text-align: center;
      font-family: "Cabin", sans-serif;
    }
  }
  ul {
    list-style-type: none;
  }
  .cart {
    padding: 1rem;
  }
  .aLink {
    text-decoration: none;
    font-weight: 500;
    color: #9b6d52;
    padding: 0 1rem;
    &::after {
      content: "";
      font-size: 0.7rem;
      display: block;
      text-align: center;
    }
    span {
      display: block;
      font-size: 0.85rem;
    }
  }
  .selected {
    color: #533118;
    &::after {
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      background: #533118;
      display: block;
      margin: 0 auto;
    }
  }
  h1 {
    display: inline;
    color: #533118;
    font-family: "EB Garamond", serif;
    font-weight: 500;
    margin: 0.5rem;
  }

  @media (max-width: 700px) {
    // h1 {
    //   color: #efefef;
    //   font-size: 1rem;
    // }
    .nav__link {
      text-decoration: none;
      height: auto;
      display: block;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
    }
    .aLink {
      box-sizing: border-box;
      color: #efefef;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      &::after {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        background: #533118;
        order: 1;
        margin: 0;
        margin-right: 0.5rem;
      }
      span {
        order: 2;
        font-size: 1rem;
        text-align: left;
      }
    }
    .selected {
      &::after {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        background: #efefef;
        order: 1;
        margin: 0;
        margin-right: 0.5rem;
      }
    }
  }
`;

const Products = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  .expndBtn {
    display: none;
  }
  ul {
    display: flex;
    flex: 1;
    justify-content: space-around;
  }
  @media (max-width: 700px) {
    display: block;
    background: var(--elbowBrown);
    position: fixed;
    z-index: 100;
    left: ${props => (props.inView ? "0" : "-250px")};
    top: 0;
    padding: 1rem;
    box-sizing: border-box;
    width: 250px;
    height: 100%;
    z-index: 200;
    transition: 0.5s;
    ul {
      display: block;
      padding: 0;
    }
    li {
      padding: 1rem 0;
    }
  }
`;

export default Nav;
