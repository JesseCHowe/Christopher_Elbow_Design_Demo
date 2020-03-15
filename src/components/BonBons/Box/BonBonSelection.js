import React from "react";
import { useDispatch } from "react-redux";
import { addBonBon, bonBonSelection } from "../../../store/actions/bonBons";
import styled from "styled-components";
import Backdrop from "../../UI/Backdrop/Backdrop";

const BonBonSelection = () => {
  const allbonbons = [
    "smk-maple",
    "ban-foster",
    "blood-orange_1",
    "fleur",
    "sp-chai",
    "lavender",
    "xtra-dk",
    "hazelnut-pral",
    "passion-frt",
    "equador",
    "raspberry",
    "new-rosemary",
    "ven-dark",
    "vanilla",
    "ven-spice",
    "coffee",
    "champagne",
    "BB-bourbon",
    "straw-balsamic",
    "cinnamon-dulce",
    "lime"
  ];

  const dispatch = useDispatch();

  const addBonBonDisaptch = flavor => {
    dispatch(addBonBon(flavor));
    dispatch(bonBonSelection(false));
  };
  return (
    <MainBonBonContainer>
      <Backdrop show={true} clicked={() => dispatch(bonBonSelection(false))} />
      <BonBonContainer>
        <BonBonHeader>
          <h1>Select BonBon</h1>
          <button
            className="exitBtn"
            onClick={() => dispatch(bonBonSelection(false))}
          >
            Exit
          </button>
        </BonBonHeader>
        <BonBonBody>
          {allbonbons.map(bonbon => {
            return (
              <div>
                <BonBonBtn
                  image={bonbon}
                  onClick={() => addBonBonDisaptch(bonbon)}
                ></BonBonBtn>
                <span>Test</span>
              </div>
            );
          })}
        </BonBonBody>
      </BonBonContainer>
    </MainBonBonContainer>
  );
};

const MainBonBonContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300;
`;
const BonBonContainer = styled.div`
  z-index: 100;
  background: #fff;
  border: 1px solid #333;
  max-width: 750px;
  display: block;
  position: relative;
`;
const BonBonHeader = styled.div`
  position: sticky;
  top: 0;
  display: block;
  background: teal;
`;
const BonBonBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  button {
    width: 150px;
    height: 150px;
    border: 0;
    margin-top: 0.5rem;
  }
  span {
    display: block;
    text-align: center;
  }
`;

const BonBonBtn = styled.button`
  background-image: ${props =>
    `url("https://www.elbowchocolates.com/media/wysiwyg/${props.image}.jpg")`};
  background-size: cover;
`;

const Test = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300;
  h1 {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    display: block;
    background: teal;
  }
`;
const ListOfBonBons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;

  button {
    width: 150px;
    height: 150px;
  }
`;

const BonBonSelectionContainer = styled.div`
  z-index: 100;
  background: #fff;
  border: 1px solid #333;
  max-width: 750px;
  display: block;
  padding: 1rem;
  position: relative;

  span {
    display: block;
    text-align: center;
  }
  .exitBtn {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

export default BonBonSelection;
