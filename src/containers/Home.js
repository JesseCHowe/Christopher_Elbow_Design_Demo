import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import myBons from "../assets/data/bonbon";

const Home = () => {
  const [showHome, setshowHome] = useState(false);
  let homeWidth = window.innerWidth;

  function showTooltip(event, d) {
    if ((homeWidth > 700) && showHome) {
        const tooltip = document.getElementById("tooltip");
        console.log(tooltip.offsetHeight);
        let w = window.innerWidth;
        let h = window.innerHeight;
        tooltip.style.display = "inline-block";
        tooltip.innerHTML = `<h4>${d.name}</h4><p>${d.description}</p>`;
        (event.pageX < w / 2) ? 
          tooltip.style.left = event.pageX + 20 + "px" :
          tooltip.style.left = event.pageX - tooltip.offsetWidth - 20 + "px";
        (event.pageY < h / 2) ?
        tooltip.style.top = event.pageY + 20 + "px":
        tooltip.style.top = event.pageY - tooltip.offsetHeight - 20 + "px";
    }
  }

  function hideTooltip() {
    const tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }

  return (
    <HomeContainer>
      <MobileLight>
        <LeadText>
          <h2><span class="signature">SIGNATURE</span>BONBONS</h2>
          <p>Available in collections of 9,21, and even 48 perfect bites</p>
          <img
            alt=""
            src="https://raw.githubusercontent.com/JesseCHowe/rock-paper-scissors/master/bonbon_cut.png"
          />
          <div class="btn-container">
            <a class="explore-flavors-btn" href="#thebonbons">
              <span>FLAVORS</span>
            </a>
            <button class="standard-btn">
              <NavLink to="/bonbons">
                <span>SHOP</span>
              </NavLink>
            </button>
          </div>
        </LeadText>
      </MobileLight>

      <ExploreBonbons id="thebonbons">
        {myBons.map((bonbon) => {
          return (
            <div>
              <img
                onMouseMove={(e) => showTooltip(e, bonbon)}
                onMouseLeave={() => hideTooltip()}
                alt="test"
                src={require(`../assets/bonbons/png/${bonbon.img}.png`)}
              />
              <div className="bonbon-text">
                <p className="bonbon-name">{bonbon.name}</p>
                <p>{bonbon.description}</p>
              </div>
            </div>
          );
        })}
      </ExploreBonbons>

      <Light testViz={showHome}>
        <LeadText>
          <h2>
            <span class="signature">SIGNATURE</span>BONBONS
          </h2>
          <p>Available in collections of 9,21, and even 48 perfect bites</p>
          <div class="btn-container">
            <button
              class="explore-flavors-btn"
              onClick={() => setshowHome(true)}
            >
              FLAVORS
            </button>
            <button class="standard-btn">
              <NavLink to="/bonbons">
                <span>SHOP</span>
              </NavLink>
            </button>
          </div>
        </LeadText>
      </Light>

      <Tooltip id="tooltip"></Tooltip>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background: #333;
  height: 100vh;
  position: relative;
  width: 100%;
  @media (max-width: 800px) {
    height: auto;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  p {
    margin: 0;
  }
`;

const Tooltip = styled.div`
  background: #000;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  color: #efefef;
  display: none;
  font-size: 0.7em;
  max-width: 200px;
  padding: 7px 9px;
  position: absolute;
  text-align: left;
`;

const LeadText = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  h2 {
    color: #333;
    display: inline;
    font-family: "Cabin", sans-serif;
    font-size: 5rem;
    margin: 0;
  }
  p {
    margin: 0;
  }
  .signature {
    color: gray;
    display: block;
    font-size: 1rem;
    margin-bottom: 0;
  }
  .btn-container {
    button {
      border-radius: 0;
      outline: none;
      border: 0;
      font-size: 1rem;
    }
    span{
      font-size: 0.75rem;
      font-weight: bold;
    }
    margin: 0 auto;
    width: fit-content;
    margin-top: 1rem;
  }
  .standard-btn {
    background: #333;
    color: #efefef;
    padding: 1.5rem 3rem;
  }
  .explore-flavors-btn {
    background: #ddd;
    color: #333;
    padding: 1rem 2rem;
  }
  @media (max-width: 800px) {
    h2 {
      font-size: 2.5rem;
    }
  }
  img {
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
  }
`;

const MobileLight = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    display: none;
  }
`;
const Light = styled.div`
  top: 0;
  left: 0;
  transform: translateX(${(props) => (props.testViz ? "-101%" : "0%")});
  position: absolute;
  width: 50%;
  height: 100%;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.75s;
  transition-timing-function: ease-out;
  @media (max-width: 800px) {
    display: none;
  }
`;

const ExploreBonbons = styled.div`
  @media(min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
    height: calc(100vh - 60px);
    max-height: calc(100vh - 60px);
    transform: translateY(60px);
    overflow: hidden;
    > * {
      display: flex;
      align-items: center;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 100%;
      height: 1fr;
      text-align: center;
      .bonbon-text {
        display: none;
      }
      img {
        width: 100%;
        max-width: fit-content;
      }
    }
  }
  @media(max-width: 800px) {
    display: block;
    max-width: 500px;
    margin: 0 auto;
    > * {
      display: flex;
      align-items: center;
      width 95%;
      margin: 0 auto;
      color: #efefef;
      padding: 1rem;
      box-sizing: border-box;
      border-bottom: 0.5px solid #555;
      .bonbon-name {
        font-weight: bold;
      }
      .bonbon-text {
        box-sizing: border-box;
      }
    }
    > *:last-child {
      border-bottom: 0;
    }
    > *:nth-child(odd) {
      .bonbon-text {
        padding-left: 1rem;
      }
    }
    > *:nth-child(even) {
      flex-direction: row-reverse;
      text-align: right;
      .bonbon-text {
      padding-right: 1rem;
      }
    }
  }

`;

export default Home;
