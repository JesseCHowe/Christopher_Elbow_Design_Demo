import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo/logo.svg";
import homeLogo from "../../assets/logo/homeLogo.svg";
import MobileNav from "./MobileNav/MobileNav";

const Nav = () => {
  let [viewMobile, setViewMobile] = useState(false);
  let location = useLocation();
  let homePage = location.pathname === "/";
  const products = useSelector((state) => state.products);
  const total = products.reduce(
    (previous, current) => previous + current.qty,
    0
  );

  let theLogo;
  if (homePage) {
    theLogo = <HomeLogo />;
  } else {
    theLogo = <Logo />;
  }
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

      {/* <ExpandMenu>
        <div className={`${viewMobile ? 'showNav' : 'hideNav'}`}>
        {theProducts}
        </div>
      </ExpandMenu> */}

      <NavWrapper>
        <div className={homePage ? "home" : "standard"}>
          {theLink}
          {theProducts}
        </div>
      </NavWrapper>
      <MobileNav/>

    </React.Fragment>
  );
};

const ExpandMenu = styled.div`
> * {
  background: #333;
  width: 75%;
  left: -100%;
  top: 0;
  position: fixed;
  transition: 1s;
  height: 100vh;
  display: block;
  z-index: 200;
  span {
    color: #fff;
    text-decoration: none;
  }
}
.showNav {
left: 0;
}
`;

const Logo = styled.div`
  box-sizing: border-box;
  float: left;
  width: 2.55rem;
  height: 2.55rem;
  background: none;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 2rem auto;
    background-image: url(${logo});
    background-position: center;
    background-size: 40%;
    background-repeat: no-repeat;
  }
`;

const HomeLogo = styled.div`
  box-sizing: border-box;
  float: left;
  width: 2.55rem;
  height: 2.55rem;
  background: none;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 2rem auto;
    background-image: url(${homeLogo});
    background-position: center;
    background-size: 40%;
    background-repeat: no-repeat;
  }
`;

const NavWrapper = styled.nav`
@media (max-width: 700px) {
  display: none;
}
  position: relative;
  > * {
    top: 0;
    height: 65px;
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
  }
  .home {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 300;
    mix-blend-mode: difference;
    span {
      color: #fff;
    }
  }
  .standard {

  }
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
  .cart {
    padding: 1rem;
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
  h1 {
    display: inline;
    color: #533118;
    font-family: "EB Garamond", serif;
    font-weight: 500;
    margin: 0.5rem;
  }
  }
`;

const Products = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  .expndBtn {
    display: none;
  }
  ul {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    list-style-type: none;
    padding: 0.5rem;
    font-size: 0.85rem;
  }
  li {
    text-align: center;
    color: #333;
    font-size: 0.9rem;
  }
`;

export default Nav;
