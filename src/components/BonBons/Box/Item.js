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
  background: #efefef;
  box-sizing: border-box;
  border-radius: 5px;
  -moz-box-shadow: inset 1px 0 4px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 1px 0 4px rgba(0, 0, 0, 0.5);
  box-shadow: inset 1px 0 4px rgba(0, 0, 0, 0.5);
  background-image: ${props =>
    props.image === "empty"
      ? ""
      : `url(https://www.elbowchocolates.com/media/wysiwyg/${props.image}.jpg)`};
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Item;
