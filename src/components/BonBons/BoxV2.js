import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setItemIndex, bonBonSelection } from "../../store/actions/bonBons";

const BoxV2 = props => {

  const dispatch = useDispatch();
  const renderBonBonSelection = idx => {
    dispatch(setItemIndex(idx));
    dispatch(bonBonSelection(true));
  };

  const bonBons = useSelector((state) => state.bonBons.items);
  const dimensions = useSelector((state) => state.bonBons.dimensions);
  const ratio = dimensions[0] / dimensions[1];

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

  let idx = 0;
  return (
    <STYLE_TABLE
    ratio={ratio}
    size={dimensions[1]}
    >
      {itemArray.map(o => {
        return (
          <tr>
            {o.map(o => {
              let i = idx;
              idx++;
              return(
                <STYLE_TD
                onClick={() => renderBonBonSelection(i)}
                image={o}
                />
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

// padding: 2px;
border-spacing: 0.35rem;
  border: 2px solid #333;
`;

const STYLE_TD = styled.td`
box-sizing: border-box;
border-radius: 10%;
box-shadow: inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
background-color: #e6e6e6;
background-image: ${props => 
  props.image === ""
  ? ""
  : `url(${require(`../../assets/bonbons/png/${props.image}.png`)})`
};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default BoxV2