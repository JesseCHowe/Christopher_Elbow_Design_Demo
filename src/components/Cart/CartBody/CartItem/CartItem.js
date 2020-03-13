import React from "react";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { removeAllFromCart } from "../../../../store/actions/productSelection";
import QtyCounter from "../../../UI/QtyCounter/QtyCounter";
import styled from "styled-components";

const CartItem = props => {
  const dispatch = useDispatch();

  return (
    <CART_ITEM>
      <td className="title">
        <img
          alt={props.product.name}
          src={require(`../../../../assets/images/${props.product.image}.jpg`)}
        />
        <div className="item_title">
          <span>{props.product.name}</span>
          <Button
            btnType="remove"
            clicked={() => dispatch(removeAllFromCart(props.product.name))}
          >
            Remove From Cart
          </Button>
        </div>
      </td>
      <td>
        <QtyCounter product={props.product} />
      </td>
      <td className="SUB_TOTAL" data-label="Subtotal">
        ${(props.product.qty * props.product.price).toFixed(2)}
      </td>
    </CART_ITEM>
  );
};

const CART_ITEM = styled.tr`
  border-bottom: 1px solid #ccc;
  img {
    max-width: 120px;
  }
`;

export default CartItem;
