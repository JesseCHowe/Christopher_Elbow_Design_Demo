import React from "react";
import sortFunctions from "./sortFunctions";
import Backdrop from "../UI/Backdrop/Backdrop";
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
  p {
    margin: 0;
    padding: 1rem 0;
    border-bottom: 1px solid #333;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  text-transform: uppercase;
  background: #fff;
  box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.3);
  z-index: 500;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  position: fixed;
  transition: 1s;
  right: ${(props) => `${props.flow}%`};
  top: 0;
  button {
    background: #fff;
    border: 0;
    border-bottom: 1px solid #333;
    display: block;
    padding: 1rem;
    text-align: left;
    width: 100%;
  }
  .done {
    background: #333;
    color: #fff;
    width: fit-content;
    margin: 1rem auto;
    padding: 1rem 3rem;
    flex: none;
  }
  > * {
    border-bottom: 1px solid #333;
  }
`;
export default SortModal;
