import React from "react";
import styled from "styled-components";
// import Item from "./Item";
import { useSelector } from "react-redux";

const BoxV2 = props => {
  const bonBons = useSelector((state) => state.bonBons.items);
  const dimensions = useSelector((state) => state.bonBons.dimensions);
  const ratio = dimensions[0] / dimensions[1];

  // const dummmy_dimensions = [6,8];
  // const dummy_ratio = dummmy_dimensions[0] / dummmy_dimensions[1];

  const itemArray = [
  ];

  let newNum = 0;
  for(let i = 0; i < dimensions[0]; i++) {
    const newArr = [];
    for(let j = 0; j < dimensions[1]; j++) {
      newArr.push(bonBons[newNum] ? bonBons[newNum] : "");
      newNum++
    }
    itemArray.push(newArr)
  }


  return (
    <STYLE_TABLE
    ratio={ratio}
    size={dimensions[1]}
    >
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
  height: ${props => `${95 * props.ratio}vw`};
  max-width: ${(props) => `${(props.size * 75)}px`};
  max-height: ${(props) => `${(props.size * 75)* props.ratio}px`};

padding: 2px;
  border: 1px solid #000;
  td {
    text-align: center;
    box-sizing: border-box;
    border: 1px solid blue;
  }
`;

export default BoxV2