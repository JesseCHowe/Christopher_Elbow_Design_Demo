import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faThList,
  faSortAmountDownAlt,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { viewMode } from "../../../store/actions/confections";

const DisplayController = (props) => {
  const dispatch = useDispatch();
  return (
    <SortControls>
      <div className="view-modes">
        <Button clicked={() => dispatch(viewMode("list"))}>
          <FontAwesomeIcon icon={faThList} />
        </Button>
        <Button clicked={() => dispatch(viewMode("gallery"))}>
          <FontAwesomeIcon icon={faThLarge} />
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
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  .dropbtn {
    background: none;
    border: 0;
    color: #333;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    padding: 16px;
    width: fit-content;
    span {
      font-weight: bold;
      margin-right: 1rem;
      text-transform: uppercase;
    }
  }
  .sort-view button {
    border: none;
    color: gray;
    font-size: 1.5rem;
  }
  .sort-view .active {
    color: #333;
  }
  .view-modes {
    display: flex;
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
