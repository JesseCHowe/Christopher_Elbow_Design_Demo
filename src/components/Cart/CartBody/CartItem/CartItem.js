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
    <CART_ROW>
      <td>
        <img
          alt={props.product.name}
          src={require(`../../../../assets/images/${props.product.image}.jpg`)}
        />
      </td>
      <td className="item_description">
        <div>
          <p className="item_title">{props.product.name}</p>
          <p className="item_price">
            ${(props.product.qty * props.product.price).toFixed(2)}
          </p>
        </div>
      </td>
      <td>
        <QtyCounter product={props.product} />
      </td>
      <td>
        <Button
          btnType="remove"
          clicked={() => dispatch(removeAllFromCart(props.product.name))}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
    </CART_ROW>
  );
};

const CART_ROW = styled.tr`
  background: #fff;
  color: #333;
  td {
    padding: 1rem;
    border-top: 0px;
    text-align: center;
  }
  img {
    width: 100%;
    max-width: 150px;
  }
  .item_description {
    text-align: left;
    font-weight: bold;
    .item_price {
      color: gray;
    }
  }
`;

export default CartItem;
