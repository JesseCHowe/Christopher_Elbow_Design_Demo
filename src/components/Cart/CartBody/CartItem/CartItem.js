import React from "react";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { removeAllFromCart } from "../../../../store/actions/productSelection";
import QtyCounter from "../../../UI/QtyCounter/QtyCounter";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <CART_ITEM>
      <td className="title">
        <img
          alt={props.product.name}
          src={require(`../../../../assets/images/${props.product.image}.jpg`)}
        />
      </td>
      <td>
        <div>
          <p className="item_title">{props.product.name}</p>
          <p className="item_price">${(props.product.qty * props.product.price).toFixed(2)}</p>
        </div>
      </td>
      <td>
        <QtyCounter product={props.product} />
      </td>
      <td className="SUB_TOTAL" data-label="Subtotal">
        <Button
          btnType="remove"
          clicked={() => dispatch(removeAllFromCart(props.product.name))}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
    </CART_ITEM>
  );
};

const CART_ITEM = styled.tr`
  background: #fff;
  img {
    max-width: 120px;
    max-height: 120px;
  }
  td {
    text-align: center;
  }
`;

export default CartItem;
