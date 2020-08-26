import React from "react";
import sortFunctions from "./sortFunctions";
import Backdrop from "../UI/Backdrop";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {sortMode} from "../../store/actions/confections";

const SortModal = (props) => {
  const dispatch = useDispatch();
  const handleSort = (o) => {
    props.clicked()
    dispatch(sortMode(o))
  }

  return (
    <React.Fragment>
      <Backdrop show={props.display} clicked={props.clicked}/>
      <SortControls flow={props.display ? '0' : '-100'}>
        <p>Sort By</p>
        {Object.keys(sortFunctions).map(o => {
          return (
            <button onClick={() => handleSort(o)}>
              {sortFunctions[o].name}
            </button>
          )
        })}
        <button
        onClick={props.clicked}
        className="done"
        >DONE</button>
      </SortControls>
    </React.Fragment>
  );
};

const SortControls = styled.div`
  background: #fff;
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.3);
  height: 100vh;
  max-width: 300px;
  position: fixed;
  right: ${(props) => `${props.flow}%`};
  text-transform: uppercase;
  top: 0;
  transition: 1s;
  width: 80%;
  z-index: 500;
  button {
    background: #fff;
    border: 0;
    border-bottom: 1px solid #333;
    display: block;
    padding: 1rem;
    text-align: left;
    width: 100%;
  }
  p {
    align-items: center;
    border-bottom: 1px solid #333;
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    margin: 0;
    padding: 1rem 0;
    text-align: center;
    width: 100%;
  }
  > * {
    border-bottom: 1px solid #333;
  }
  .done {
    background: #333;
    color: #fff;
    flex: none;
    margin: 1rem auto;
    padding: 1rem 3rem;
    width: fit-content;
  }
  @media(max-width: 700px) {
    transition: none;
  }
`;
export default SortModal;
