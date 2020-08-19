import React from "react";
import styled from "styled-components";
// import Item from "./Item";
// import { useSelector } from "react-redux";

const BoxV2 = props => {
  // const bonBons = useSelector((state) => state.bonBons.items);
  // const dimensions = useSelector((state) => state.bonBons.dimensions);
  // const total = dimensions[0] * dimensions[1];
  // const ratio = dimensions[0] / dimensions[1];
  // const columns = [];
  // const rows = [];
  const itemArray = [
    [1,2],
    [3,4]
  ];

  return (
    <STYLE_TABLE>
      {itemArray.map(o => {
        return (
          <tr>
            {o.map(j => {
              return(
                <td>{j}</td>
              )
            })}
          </tr>
        )
      })}
    </STYLE_TABLE>
  )

}

const STYLE_TABLE = styled.table`
margin: 0 auto;
  position: relative;

  width:  95vw;
  height: calc(95vw * (2/2));

  max-width: calc(100px * 2);
  max-height: calc(100px * 2);

padding: 2px;
  border: 1px solid #000;
  td {
    box-sizing: border-box;
    border: 1px solid blue;
  }
`;

export default BoxV2