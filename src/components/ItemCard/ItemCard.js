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
      <div className={`${props.viewMode}-body`}>
      <div className="shop-item-image ">
        <img
          src={require(`../../assets/images/${props.product.image}.jpg`)}
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
.list-body {
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin-bottom: 1rem;
  box-sizing: border-box;
  background: #fff;
  padding: 0.5rem;
  border: 1px solid #c3c3c3;
  .shop-item-desc{
    display: flex;
    align-items: center;
  }
  .title{
      font-weight: bold;
  
      display: block;
      color: #333;
      text-decoration: none;
  }
  span {
    color: gray;
    font-weight: bold;
  }
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: auto;
      }
      p {
        text-align: center;
      }
          .shop-item-image {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
}

.gallery-body{
  background: #fff;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .title {
    display: block;
    text-align: center;
    color: #333;
    text-decoration: none;
    margin-bottom: 1rem;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    }
    p {
      text-align: center;
    }
    .btnContainer{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      span {
        color: gray;
        font-weight: bold;
      }
    }

    .shop-item-image {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
}

`;

// const Item = styled.div`
  // box-sizing: border-box;
  // background: #fff;
  // padding: 0.5rem;
  // border: 1px solid #c3c3c3;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // .title {
  //   display: block;
  //   text-align: center;
  //   color: #333;
  //   text-decoration: none;
  // }
  // img {
  //   display: block;
  //   margin: 0 auto;
  //   max-width: 100%;
  //   height: auto;
  //   }
  //   p {
  //     text-align: center;
  //   }

  //   .shop-item-image {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     height: 100%;
  //   }
// `;

export default ItemCard;
