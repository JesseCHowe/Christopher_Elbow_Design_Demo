import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/actions/productSelection";

const ItemCard = props => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  let inCart;
  products.forEach(product => {
    if (product.name === props.product.name) {
      inCart = true;
    }
  });
  let cartBtn = (
    <Button btnType="cart" clicked={() => dispatch(addToCart(props.product))}>
      Add to Cart
    </Button>
  );
  if (inCart) {
    cartBtn = (
      <Button disabled={true} btnType="cart">
        In Cart
      </Button>
    );
  }
  return (
    <Item>
      <img
        src={require(`../../assets/images/${props.product.image}.jpg`)}
        alt=""
      />
      <Link className="title" to={`/product/hazlenut`}>
        {props.product.name}
      </Link>
      <div className="btnContainer">
        <span>${props.product.price}</span>

        {cartBtn}
      </div>
    </Item>
  );
};

const Item = styled.div`
  background: #fff;
  // max-height: 400px;
  min-height: 234px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    margin: 0;
    align-self: center;
  }
  .title {
    font-size: 0.8rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #aaa;
    font-weight: bold;
  }
  .btnContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .price {
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #533118;
    font-weight: bold;
  }
  box-sizing: border-box;
  position: relative;
  // align-self: stretch;

  margin: 0.5rem;
  padding: 1rem;
  > * {
    display: block;
    // text-align: center;
  }
  img {
    max-height: 150px;
    width: auto;
    margin: 0 auto;
  }
  &::before {
    box-sizing: border-box;
    content: "";
    display: block;
    border: 2px solid #efefef;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    transition: 0.25s;
  }
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 1);
  }
`;

export default ItemCard;
