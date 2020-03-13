import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
import { addToCart } from "../../../store/actions/productSelection";

const Details = props => {
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
    <DetailsStyle>
      <ProductName>{props.product.name}</ProductName>
      <p>
        ${props.product.price} <span>IN STOCK</span>
      </p>
      <p>{props.product.desc}</p>
      {cartBtn}
    </DetailsStyle>
  );
};

const DetailsStyle = styled.div`
  padding: 1rem;
  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 3px;
    background: black;
  }
`;

const ProductName = styled.p`
  font-size: 1.5rem;
`;
export default Details;
