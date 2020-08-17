import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setItemIndex, bonBonSelection } from "../../../store/actions/bonBons";
const Item = props => {
  const dispatch = useDispatch();
  const renderBonBonSelection = idx => {
    dispatch(setItemIndex(idx));
    dispatch(bonBonSelection(true));
  };

  return (
    <ItemContainer
      disabled={props.isDisabled}
      onClick={() => renderBonBonSelection(props.idx)}
      image={props.image}
    />
  );
};

const ItemContainer = styled.button`
  background-color: #ccc;
  box-sizing: border-box;
  border: 0;
  outline: none;
  margin: 5px solid #fff;
  border-radius: 10%;
  box-shadow:
    // inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);

background-image: ${props => 
  props.image === ""
  ? ""
  : `url(${require(`../../../assets/bonbons/png/${props.image}.png`)})`
};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

`;

export default Item;