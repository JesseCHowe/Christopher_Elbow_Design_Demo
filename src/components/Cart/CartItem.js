import React from "react";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { removeAllFromCart } from "../../store/actions/productSelection";
import QtyCounter from "../UI/QtyCounter";
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
          src={require(`../../assets/images/${props.product.image}.jpg`)}
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
  border: 1px solid var(--elbowGray);
  color: #333;
  td {
    border: 1px solid var(--elbowGray);
    border-top: 0px;
    padding: 1rem;
    text-align: center;
  }
  img {
    max-width: 150px;
    width: 100%;
  }
  .item_description {
    font-weight: bold;
    text-align: left;
    .item_price {
      color: gray;
    }
  }
`;

export default CartItem;
