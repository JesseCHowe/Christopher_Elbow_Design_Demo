import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const test = require("../assets/banners/bars1_1.jpg");
  return (
    <Main>
      <Test>
        <h1>
          The road to making the world’s finest chocolate and chocolate
          confections wasn’t a short one.
        </h1>
        <p>
          From humble beginnings as a line cook at the Lincoln Country Club to
          the bright lights of Emeril’s Delmonico Steakhouse and Jean Joso’s
          Eiffel Tower Restaurant on the Las Vegas strip, all the way back home
          to Shiraz and the American Restaurant right here in Kansas City, life
          in the kitchen has taken me a lot of places.
        </p>
        <p>
          But it is here, producing hand-crafted chocolates, bon bons and
          confections, that finally feels like home. Since 2003, Christopher
          Elbow Chocolates has been bringing modern culinary artistry together
          with a craftsman-like work ethic to create beautiful, decadent
          expressions of flavors from around the world. And we’re proud to
          deliver them straight to you.
          <br />
          <br />
          <span>Christopher Elbow</span>
        </p>
      </Test>

      <HomeContainer>
        <NavLink to="/chocolate-bars" className="signatures">
          <span>Signature Chocolate Bars</span>
        </NavLink>
        <NavLink to="/bonbons" className="bonbons">
          <div>
            <span>Signature BonBons</span>
            <span className="subtitle">
              Available in collections of 9, 21, <br />
              and even 48 perfect bites.
            </span>
          </div>
        </NavLink>
        <NavLink to="/artisan-confections" className="confections">
          <span>Confections</span>
        </NavLink>
      </HomeContainer>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;
const Test = styled.div`
  font-family: "Cabin", sans-serif;

  h1 {
    font-size: 1.3rem;
    color: var(--elbowBrown);
    font-weight: 300;
  }
  flex-basis: 400px;
  padding: 0.75rem;
  border-right: 1px solid #efefef;
  @media (max-width: 700px) {
    display: none;
  }
`;
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--navHeight));
  a {
    text-decoration: none;
  }
  > * {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    &:hover {
      flex: 1.2;
      span {
        &::after {
          display: block;
          text-align: center;
          font-size: 0.75rem;
        }
      }
    }
  }
  span {
    display: block;
    transition: all 0.5s ease-in-out;
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--elbowBrown);
    font-family: "Cabin", sans-serif;
    font-weight: 300;
    margin-bottom: 0;

    text-align: center;
  }
  .subtitle {
    display: block;
    width: 100%;
    padding: 0;
    font-size: 0.75rem;
  }
  .bonbons {
    background-image: url("https://www.elbowchocolates.com/media/wysiwyg/banner-bonbons.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .confections {
    position: relative;
    background-image: url("https://www.elbowchocolates.com/media/catalog/category/nuts_1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right center;
    span {
      position: absolute;
      left: 3rem;
    }
  }
  .signatures {
    position: relative;
    background-image: url("https://www.elbowchocolates.com/media/catalog/category/bars1_1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
    span {
      position: absolute;
      right: 3rem;
    }
  }
  @media (max-width: 700px) {
    .signatures {
      span {
        position: relative;
        text-align: center;
        background: #efefef;
        padding: 0.5rem;
        right: 0;
      }
    }
    .confections {
      span {
        position: relative;
        text-align: center;
        background: #efefef;
        padding: 0.5rem;
        left: 0;
      }
    }
    .bonbons {
      span {
        position: relative;
        text-align: center;
        background: #efefef;
        padding: 0.5rem;
        left: 0;
      }
      .subtitle {
        width: auto;
      }
    }
  }
`;

export default Home;
