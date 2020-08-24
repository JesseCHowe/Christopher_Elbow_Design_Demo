import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../../../../../store/actions/productSelection";
import Button from "../../../../UI/Button/Button";

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
  > * {
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin-bottom: 1rem;
    box-sizing: border-box;
    padding: 0.5rem;
    border: 1px solid #c3c3c3;
  }
  .shop-item-desc {
    display: flex;
    align-items: center;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
  span {
    color: gray;
  }
  .title {
    color: #333;
    text-decoration: none;
  }
  @media (min-width: 700px) {
    .gallery-mode {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      margin-bottom: 0;
      .btnContainer {
        display: flex;
        padding: 0.5rem 1rem;
        justify-content: space-between;
        align-items: center;
      }
      .shop-item-image {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
      .shop-item-desc {
        display: block;
      }
    }
  }
`;

export default ItemCard;
