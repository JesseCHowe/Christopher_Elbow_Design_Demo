import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo/logo.svg";
import homeLogo from "../../assets/logo/homeLogo.svg";
import MobileNav from "./MobileNav";

const Nav = () => {
  let location = useLocation();
  let homePage = location.pathname === "/";
  const products = useSelector((state) => state.products);
  const total = products.reduce(
    (previous, current) => previous + current.qty,
    0
  );

  let theLogo;
  homePage ? (theLogo = <HomeLogo />) : (theLogo = <Logo />);

  let theLink = (
    <Link className="nav__link" to="/">
      {theLogo}
    </Link>
  );

  let theProducts = (
    <Products>
      <ul>
        <li>
          <NavLink
            to="/chocolate-bars/cherry-streusel-bar"
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
          <NavLink to="/bonbons" className="aLink" activeClassName="selected">
            <span>Bonbons</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="aLink" activeClassName="selected">
            <span>Cart ({total})</span>
          </NavLink>
        </li>
      </ul>
    </Products>
  );

  return (
    <React.Fragment>
      <NavWrapper>
        <div className={homePage ? "home" : "standard"}>
          {theLink}
          {theProducts}
        </div>
      </NavWrapper>
      <MobileNav />
    </React.Fragment>
  );
};

const Logo = styled.div`
  align-items: center;
  background: none;
  border: 2px solid #333;
  box-sizing: border-box;
  display: flex;
  float: left;
  height: 2.55rem;
  width: 2.55rem;
  &::after {
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40%;
    content: "";
    display: block;
    height: 3rem;
    margin: 2rem auto;
    width: 3rem;
  }
`;

const HomeLogo = styled.div`
  align-items: center;
  background: none;
  border: 2px solid #fff;
  box-sizing: border-box;
  display: flex;
  float: left;
  height: 2.55rem;
  width: 2.55rem;
  &::after {
    background-image: url(${homeLogo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40%;
    content: "";
    display: block;
    height: 3rem;
    margin: 2rem auto;
    width: 3rem;
  }
`;

const NavWrapper = styled.nav`
  position: relative;
  h1 {
    color: #533118;
    display: inline;
    font-family: "EB Garamond", serif;
    font-weight: 500;
    margin: 0.5rem;
  }
  > * {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 65px;
    margin: 0 auto;
    max-width: 1200px;
    padding: 1rem;
    top: 0;
    width: 100%;
  }
  .aLink {
    text-decoration: none;
    font-weight: 500;
    color: #333;
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
  .cart {
    padding: 1rem;
  }
  .home {
    left: 50%;
    mix-blend-mode: difference;
    position: fixed;
    transform: translate(-50%, 0);
    z-index: 300;
    span {
      color: #fff;
    }
  }
  .nav__link {
    align-items: center;
    display: flex;
    height: 100%;
    text-decoration: none;
    svg {
      fill: #fff;
    }
    span {
      display: block;
      font-family: "Cabin", sans-serif;
      font-size: 0.5rem;
      text-align: center;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
}
`;

const Products = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  ul {
    display: grid;
    font-size: 0.85rem;
    grid-template-columns: 25% 25% 25% 25%;
    list-style-type: none;
    margin: 0 auto;
    max-width: 600px;
    padding: 0.5rem;
    width: 100%;
  }
  li {
    color: #333;
    font-size: 0.9rem;
    text-align: center;
  }
  .expndBtn {
    display: none;
  }
`;

export default Nav;
