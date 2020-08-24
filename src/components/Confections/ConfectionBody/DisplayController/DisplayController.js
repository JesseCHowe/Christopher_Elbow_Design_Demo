import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faThList,
  faSortAmountDownAlt,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../UI/Button/Button";
import {useDispatch } from "react-redux";
import {viewMode} from "../../../../store/actions/confections";

const DisplayController = (props) => {
  const dispatch = useDispatch();
  return (
    <SortControls>
      <div className="view-modes">
        <Button clicked={() => dispatch(viewMode('list'))}>
          <FontAwesomeIcon icon={faThList}/>
        </Button>
        <Button clicked={() => dispatch(viewMode('gallery'))}> 
          <FontAwesomeIcon icon={faThLarge}/>
        </Button>
      </div>
      <Button clicked={props.clicked}>
        <span>Sort</span>
        <FontAwesomeIcon icon={faSortAmountDownAlt} />
      </Button>
    </SortControls>
  );
};

const SortControls = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .sort-view button {
    border: none;
    color: gray;
    font-size: 1.5rem;
  }
  .view-modes {
    display: flex;
  }
  .sort-view .active {
    color: #333;
  }
  .dropbtn {
    color: #333;
    padding: 16px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    width: fit-content;
    border: 0;
    background: none;
    span {
      margin-right: 1rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  @media (max-width: 600px) {
    display: block;
    .dropdown {
      display: block;
    }
    .view-modes {
      display: none;
    }
  }
`;
export default DisplayController;
