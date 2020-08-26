import React, { useState } from "react";
import styled from "styled-components";
import ExploreBonbons from "../components/Home/ExploreBonbons";
import Lead from "../components/Home/Lead";

const Home = () => {
  const [showHome, setshowHome] = useState(false);

  return (
    <HomeContainer>
      <Lead clicked={() => setshowHome(true)} showHome={showHome}/>
      <ExploreBonbons showHome={showHome}/>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background: #333;
  height: 100vh;
  @media (max-width: 800px) {
    height: auto;
  }
`;


export default Home;
