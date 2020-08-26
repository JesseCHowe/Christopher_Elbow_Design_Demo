import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const Lead = props => {
  return (    
    <Light testViz={props.showHome}>
    <LeadText>
          <h2><span class="signature">CHRIPSTOPHER</span>ELBOW</h2>
          <p>Modern culinary artistry together with a craftsman-like work ethic to create beautiful, decadent expressions of flavors from around the world. And we’re proud to deliver them straight to you.</p>
          <div class="btn-container">
            <button class="explore-flavors-btn" onClick={props.clicked}>
            <span>FLAVORS</span>
            </button>
            <button class="standard-btn">
              <NavLink to="/bonbons"><span>SHOP</span></NavLink>
            </button>
          </div>
        </LeadText>
      </Light>
  )
}

let slideIn = keyframes`
0% {
  transform: translateX(0%);
}
100% {
  transform: translateX(-100%);
}
`;

let slideOut = keyframes`
0% {
  transform: translateX(0%);
}
100% {
  transform: translateX(0%);
}
`;

const LeadText = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  color: #333;
  max-width: 500px;
  h2 {
    display: inline;
    font-family: "Cabin", sans-serif;
    font-size: 5rem;
    margin: 0;
  }
  p {
    margin: 0;
    color: gray;
  }
  .signature {
    color: gray;
    display: block;
    font-size: 1rem;
    margin-bottom: 0;
  }
  .btn-container {
    a {
      color: #fff;
      text-decoration: none;
    }
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
    background: #efefef;
    color: #333;
    padding: 1rem 2rem;
  }
  @media (max-width: 800px) {

    h2 {
      font-size: 4.5rem;
    }
  }
  img {
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
  }
`;

//  // transform: translateX(${(props) => (props.testViz ? "-101%" : "0%")});

const Light = styled.div`
  top: 0;
  left: 0;
  animation: 1s ${props => props.testViz ? slideIn : slideOut} forwards;
  position: absolute;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  @media (max-width: 800px) {
    transition: none;
    position: relative;
    animation: 0s ${slideOut} forwards;
    width: 100%;
    height: calc(100vh - 60px);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    .explore-flavors-btn{
      display: none;
    }
  }
`;

export default Lead;