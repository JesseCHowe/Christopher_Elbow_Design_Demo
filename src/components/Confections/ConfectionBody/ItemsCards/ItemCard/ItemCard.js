import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../../../../../store/actions/productSelection";
import Button from "../../../../UI/Button";

const ItemCard = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  let inCart;
  products.forEach((product) => {
    if (product.name === props.product.name) {
      inCart = true;
    }
  });

  let cartBtn;
  inCart
    ? (cartBtn = (
        <Button disabled={true} btnType="cart">
          In Cart
        </Button>
      ))
    : (cartBtn = (
        <Button
          btnType="cart"
          clicked={() => dispatch(addToCart(props.product))}
        >
          Add to Cart
        </Button>
      ));

  return (
    <Item>
      <div className={`${props.viewMode}-mode`}>
        <div className="shop-item-image ">
          <img
            src={require(`../../../../../assets/images/${props.product.image}.jpg`)}
            alt=""
          />
        </div>
        <div className="shop-item-desc">
          <div>
            <Link className="title" to={`/product/hazlenut`}>
              {props.product.name}
            </Link>
            <div className="btnContainer">
              <span>${props.product.price}</span>
              {cartBtn}
            </div>
          </div>
        </div>
      </div>
    </Item>
  );
};

const Item = styled.div`
  font-weight: bold;
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
  span {
    color: gray;
  }
  > * {
    border: 1px solid #c3c3c3;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
  .shop-item-desc {
    align-items: center;
    display: flex;
  }
  .title {
    color: #333;
    text-decoration: none;
  }
  @media (min-width: 700px) {
    .gallery-mode {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      margin-bottom: 0;
      text-align: center;
      .btnContainer {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1rem;
      }
      .shop-item-desc {
        display: block;
      }
      .shop-item-image {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

export default ItemCard;
