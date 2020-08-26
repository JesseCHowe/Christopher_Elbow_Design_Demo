import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { addToCart } from "../../../store/actions/productSelection";

const Details = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  let inCart;
  products.forEach((product) => {
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
      <ProductPrice>${props.product.price}</ProductPrice>
      <p>{props.product.desc}</p>
      {cartBtn}
    </DetailsStyle>
  );
};

const DetailsStyle = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;

const ProductPrice = styled.p`
  color: gray;
  font-weight: bold;
  margin-top: 0;
`;

const ProductName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0;
`;
export default Details;
