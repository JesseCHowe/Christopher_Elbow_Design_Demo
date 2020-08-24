import React from "react";
import styled from "styled-components";
import BoxSelection from "../components/BonBons/Box/BoxSelection";
import BonBonSelection from "../components/BonBons/Box/BonBonSelection";
import { useSelector, useDispatch } from "react-redux";
import { reset, previousStep } from "../store/actions/bonBons";
import { addToCart } from "../store/actions/productSelection";
import Button from "../components/UI/Button/Button";
import Box from "../components/BonBons/BoxV2";
import Header from "../components/UI/Header/Header";

const Bonbons = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.bonBons.step);
  const bonbonPurchase = useSelector((state) => state.bonBons.bonBon);
  const numItems = useSelector((state) => state.bonBons.items);

  const displayBonBonSelection = useSelector(
    (state) => state.bonBons.bonBonSelection
  );

  function handleStepOne() {
    dispatch(previousStep());
    dispatch(reset());
  }
  function handleFinalStep(bonbonPurchase) {
    dispatch(addToCart(bonbonPurchase));
    dispatch(reset());
  }

  let size;
  let filled;
  if (bonbonPurchase) {
    size = bonbonPurchase.dimensions[0] * bonbonPurchase.dimensions[1];
    filled = numItems.reduce((total, o) => {
      return total + 1;
    }, 0);
  }

  let BonBonOverlay;
  let currentDisplay;

  switch (true) {
    case step === 1:
      currentDisplay = <BoxSelection />;
      break;
    case step === 2:
      currentDisplay = (
        <React.Fragment>
          <Box />
          <div className="button-container">
            <button className="proceedBtn" onClick={() => handleStepOne()}>
              Prev Step
            </button>
            <Button
              disabled={filled < size}
              btnType="cart"
              clicked={() => handleFinalStep(bonbonPurchase)}
            >
              Add to Cart <br />${bonbonPurchase.price}
            </Button>
          </div>
        </React.Fragment>
      );
      break;
    default:
      break;
  }

  if (displayBonBonSelection) {
    BonBonOverlay = <BonBonSelection />;
  }

  return (
    <BonBonContainer>
      <Header
        sub={"singature"}
        title={"bonbons"}
        description={
          "Fresh ganaches and buttery caramels in hand-painted chocolate shells."
        }
      />
      {BonBonOverlay}
      {currentDisplay}
    </BonBonContainer>
  );
};

const BonBonContainer = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  .button-container {
    margin: 1rem auto;
    width: fit-content;
    display: flex;
    align-items: center;
  }
`;

export default Bonbons;
