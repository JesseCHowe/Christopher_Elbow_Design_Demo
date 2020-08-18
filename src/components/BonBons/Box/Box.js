import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { useSelector, } from "react-redux";


const Box = (props) => {
  const bonBons = useSelector((state) => state.bonBons.items);
  const dimensions = useSelector((state) => state.bonBons.dimensions);
  const total = dimensions[0] * dimensions[1];
  const ratio = dimensions[0] / dimensions[1];
  const columns = [];
  const rows = [];
  const itemArray = [];


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
    <MainBoxContainer>
      <BoxContainer
        rows={rows}
        columns={columns}
        ratio={ratio}
        size={dimensions[1]}
      >
        {itemArray.map((o, idx) => {
          return (
            <Item isDisabled={props.isDisabled} key={idx} idx={idx} image={o} />
          );
        })}
      </BoxContainer>
    </MainBoxContainer>
  );
};

const MainBoxContainer = styled.div`
  max-width: 1200px;
`;

const BoxContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  display: grid;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  position: relative;



  width: 95vw;
  height: ${(props) => `${props.ratio * 95}vw`};



  max-width: ${(props) => `${props.size * 75}px`};
  max-height: ${(props) => `${props.ratio * (props.size * 75)}px`};



  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => props.rows};
  padding: 0.5rem;
  border: 2px solid var(--elbowBrown);
  // box-shadow: inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
  //   inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
`;

export default Box;
