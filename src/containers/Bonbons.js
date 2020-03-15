import React, { useEffect } from "react";
import styled from "styled-components";
import Box from "../components/BonBons/Box/Box";
import BoxSelection from "../components/BonBons/Box/BoxSelection";
import BonBonSelection from "../components/BonBons/Box/BonBonSelection";
import { useSelector, useDispatch } from "react-redux";
import { reset, previousStep, nextStep } from "../store/actions/bonBons";

const Bonbons = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.bonBons.step);
  const displayBonBonSelection = useSelector(
    state => state.bonBons.bonBonSelection
  );

  let BoxSelectionTest;
  let BoxTest;
  let BonBonSelectionTest;
  let FinalSelection;
  switch (true) {
    case step === 1:
      BoxSelectionTest = <BoxSelection />;
      break;
    case step === 2:
      BoxTest = (
        <div>
          <Box />
          <button className="proceedBtn" onClick={() => dispatch(nextStep())}>
            Proceed to Purcahse
          </button>
        </div>
      );
      break;
    case step === 3:
      FinalSelection = (
        <div>
          <h1>Add a message?</h1>
          <label for="w3mission">W3Schools' mission:</label>

          <textarea id="w3mission" rows="4" cols="50">
            At w3schools.com you will learn how to make a website. We offer free
            tutorials in all web development technologies.
          </textarea>
          <Box isDisabled={true} />
        </div>
      );
    default:
      break;
  }

  if (displayBonBonSelection) {
    BonBonSelectionTest = <BonBonSelection />;
  }

  let myBreadCrumbs;

  if (step === 1) {
    myBreadCrumbs = (
      <BreadCrumbs>
        <button className="test" onClick={() => dispatch(reset())}>
          Step 1
        </button>
        <button disabled>Step 2</button>
        <button disabled>Step 3</button>
      </BreadCrumbs>
    );
  } else if (step === 2) {
    myBreadCrumbs = (
      <BreadCrumbs>
        <button className="test" onClick={() => dispatch(reset())}>
          Step 1
        </button>
        <button className="test" disabled>
          Step 2
        </button>
        <button disabled>Step 3</button>
      </BreadCrumbs>
    );
  } else {
    myBreadCrumbs = (
      <BreadCrumbs>
        <button className="test" onClick={() => dispatch(reset())}>
          Step 1
        </button>
        <button className="test" onClick={() => dispatch(previousStep())}>
          Step 2
        </button>
        <button className="test" disabled>
          Step 3
        </button>
      </BreadCrumbs>
    );
  }

  return (
    <BonBonContainer>
      {BonBonSelectionTest}

      {myBreadCrumbs}
      {BoxTest}
      {BoxSelectionTest}
      {FinalSelection}
    </BonBonContainer>
  );
};

const BonBonContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .proceedBtn {
    width: fit-content;
    margin: 1rem auto;
    display: block;
    padding: 1rem;
    background: none;
    border: 1px solid var(--elbowBrown);
    color: var(--elbowBrown);
    font-weight: bold;
  }
`;
const BreadCrumbs = styled.div`
  margin: 1rem auto;
  width: fit-content;
  button {
    width: 100px;
    height: 30px;
    background: #efefef;
    border: 0;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 30px;
      height: 30px;
      background: #efefef
      right: -14px;
      top: 0;
      border-radius: 50%;
      // transform: rotate(45deg) translate(-8px, -13px);
      // transform-origin: 50% 50%;
      z-index: 50;
    }
  }
  .test {
    background: var(--elbowBrown);
    color: #efefef;
    font-weight: bold;

    &::after{
      content: "";
      display: block;
      position: absolute;
      width: 30px;
      height: 30px;
      right: -14px;
      top: 0;
      border-radius: 50%;
      // transform: rotate(45deg) translate(-8px, -13px);
      // transform-origin: 50% 50%;
      z-index: 50;
      background: var(--elbowBrown);
    }
  }
  button[disabled] {
    color: #000;
  }
  .test[disabled]{
    color: #efefef;
    font-weight: bold;
  }
`;

export default Bonbons;
