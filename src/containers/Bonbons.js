import React, { useEffect } from "react";
import styled from "styled-components";
import Box from "../components/BonBons/Box/Box";
import BoxSelection from "../components/BonBons/Box/BoxSelection";
import BonBonSelection from "../components/BonBons/Box/BonBonSelection";
import { useSelector, useDispatch } from "react-redux";
import { reset, previousStep } from "../store/actions/bonBons";

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
      BoxTest = <Box />;
      break;
    case step === 3:
      FinalSelection = (
        <div>
          <h1>Add a message?</h1>
          <Box />
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
    <div>
      {myBreadCrumbs}
      {BonBonSelectionTest}
      {BoxTest}
      {BoxSelectionTest}
      {FinalSelection}
    </div>
  );
};

const BreadCrumbs = styled.div`
  .test {
    background: coral;
  }
  button[disabled] {
    color: #000;
  }
`;

export default Bonbons;
