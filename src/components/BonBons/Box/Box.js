import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { useSelector, useDispatch } from "react-redux";
import {
  setItemIndex,
  bonBonSelection,
  nextStep
} from "../../../store/actions/bonBons";

const Box = props => {
  const dispatch = useDispatch();
  const bonBons = useSelector(state => state.bonBons.items);
  const dimensions = useSelector(state => state.bonBons.dimensions);
  const total = dimensions[0] * dimensions[1];
  const ratio = dimensions[0] / dimensions[1];
  const columns = [];
  const rows = [];
  const itemArray = [];

  const renderBonBonSelection = idx => {
    console.log("renderBonBon Working");
    dispatch(setItemIndex(idx));
    dispatch(bonBonSelection(true));
  };
  for (let i = 0; i < total; i++) {
    bonBons[i] ? itemArray.push(bonBons[i]) : itemArray.push("");
  }
  for (let i = 0; i < dimensions[0]; i++) {
    rows.push("1fr ");
  }
  for (let i = 0; i < dimensions[1]; i++) {
    columns.push("1fr ");
  }

  return (
    <div>
      <BoxContainer
        rows={rows}
        columns={columns}
        ratio={ratio}
        size={dimensions[1]}
      >
        {itemArray.map((o, idx) => {
          return <Item key={idx} idx={idx} image={o} />;
        })}
      </BoxContainer>
      <button onClick={() => dispatch(nextStep())}>Proceed to Purcahse</button>
    </div>
  );
};

const BoxContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  display: grid;
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  width: 100vw;
  position: relative;
  height: ${props => `${props.ratio * 100}vw`};
  max-width: ${props => `${props.size * 100}px`};
  max-height: ${props => `${props.ratio * (props.size * 100)}px`};
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows};
  padding: 0.5rem;
  border: 2px solid var(--elbowBrown);
  box-shadow: inset 1px 0 4px #000000;
`;

export default Box;
