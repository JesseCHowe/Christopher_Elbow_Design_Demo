import React from "react";
import styled from "styled-components";

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
        <article className="signatures">
          <span>Signature Chocolate Bars</span>
        </article>
        <article className="bonbons">
          <span>BonBons</span>
        </article>
        <article className="confections">
          <span>Confections</span>
        </article>
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
  h1 {
    font-size: 1.3rem;
  }
  flex-basis: 25%;
  padding: 0.75rem;
  border-right: 1px solid #efefef;
`;
const HomeContainer = styled.div`
  flex-basis: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--navHeight));
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
    transition: all 0.5s ease-in-out;

    font-weight: bold;
    font-size: 1.3rem;
    padding: 1rem;
    // box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }
  .bonbons {
    background-image: url("https://www.elbowchocolates.com/media/wysiwyg/banner-bonbons.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; /* Center the image */
  }
  .confections {
    position: relative;
    background-image: url("https://www.elbowchocolates.com/media/catalog/category/nuts_1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right center; /* Center the image */
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
    background-position: left center; /* Center the image */
    span {
      position: absolute;
      right: 3rem;
    }
  }
`;

export default Home;
