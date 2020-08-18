import React from "react";
import styled from "styled-components";
import Box from "../components/BonBons/Box/Box";
import BoxSelection from "../components/BonBons/Box/BoxSelection";
import BonBonSelection from "../components/BonBons/Box/BonBonSelection";
import { useSelector, useDispatch } from "react-redux";
import { reset, previousStep, nextStep } from "../store/actions/bonBons";
import { addToCart } from "../store/actions/productSelection";
import Button from "../components/UI/Button/Button";
import Breadcrumbs from "../components/UI/Breadcrumbs/Breadcrumbs";

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
            <button
              disabled={filled < size}
              className="proceedBtn"
              onClick={() => dispatch(nextStep())}
            >
              Next Step
            </button>
          </div>
        </React.Fragment>
      );
      break;
    case step === 3:
      currentDisplay = (
        <FinalSelectionContainer>
          <div className="content-container">
            <Box isDisabled={true} />
            <div>
              <label for="bonBonMessage">Include a Mesage</label>
              <textarea id="bonBonMessage" rows="10" cols="40"></textarea>
            </div>
          </div>

          <div className="button-container">
            <button
              className="proceedBtn"
              onClick={() => dispatch(previousStep())}
            >
              Prev Step
            </button>
            <Button
              btnType="cart"
              clicked={() => dispatch(addToCart(bonbonPurchase))}
            >
              Add to Cart <br />${bonbonPurchase.price}
            </Button>
          </div>
        </FinalSelectionContainer>
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
      {BonBonOverlay}
      <Breadcrumbs currentStep={step} stages={["Size", "Flavors", "Message"]} />
      {currentDisplay}
    </BonBonContainer>
  );
};

const FinalSelectionContainer = styled.div`
  // label {
  //   display: block;
  // }
  // > * {
  //   margin: 0 auto;
  //   margin-bottom: 1rem;
  // }
  // max-width: 800px;
  // margin: 0 auto;
  // display: flex;
  // flex-wrap: wrap;
`;

const BonBonContainer = styled.div`
box-sizing: border-box;
border: 3px solid red;
max-width: 1200px;
margin: 0 auto;
`;

export default Bonbons;

  // box-sizing: border-box;
  // max-width: 1200px;
  // padding: 1rem;
  // margin: 0 auto;
  // .proceedBtn {
  //   width: fit-content;
  //   margin: 1rem auto;
  //   display: block;
  //   padding: 1rem;
  //   background: none;
  //   border: 1px solid var(--elbowBrown);
  //   color: var(--elbowBrown);
  //   font-weight: bold;
  // }
  // .content-container {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-wrap: wrap-reverse;
  //   > * {
  //     margin: 0.25rem;
  //   }
  // }
  // .button-container {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   width: 100%;
  //   margin: 1rem auto;
  //   button {
  //     margin: 0.25rem;
  //     height: fit-content;
  //     &:disabled {
  //       color: #aaa;
  //     }
  //   }
  // }