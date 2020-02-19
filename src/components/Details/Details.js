import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ChocolateBar from "./ChocolateBar/ChocolateBar";
import {
  addToCart,
  removeFromCart
} from "../../store/actions/productSelection";
import { storeProducts } from "../../data";

const Details = () => {
  const dispatch = useDispatch();

  const ChocolateName = useSelector(
    state => storeProducts[state.productSelection].title
  );
  const ChocolateDesc = useSelector(
    state => storeProducts[state.productSelection].desc
  );
  const ChocolatePrice = useSelector(
    state => storeProducts[state.productSelection].price
  );

  const [ChocolateQty] = useSelector(state =>
    state.products
      .filter(o => o.name === state.productSelection)
      .map(o => o.qty)
  );

  function add1ToCart() {
    dispatch(addToCart(ChocolateName));
  }

  return (
    <MainContain>
      <DetailsContainer>
        <div className="content-container">
          <div className="chocolate_container">
            <ChocolateBar />
          </div>
          <div className="test">
            <h1>{ChocolateName}</h1>
            <p>
              ${ChocolatePrice} <span>IN STOCK</span>
            </p>
            <p>{ChocolateDesc}</p>
            <p>QTY: {ChocolateQty || 0}</p>
          </div>
        </div>

        <div className="btnContainer">
          <button
            onClick={() => dispatch(removeFromCart(ChocolateName))}
            className="testButton subtract"
          >
            -
          </button>
          <button onClick={() => add1ToCart()} className="testButton add">
            +
          </button>
        </div>
      </DetailsContainer>
    </MainContain>
  );
};

const MainContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;
  margin-top: 1rem;

  @media (max-width: 900px) {
    flex-basis: 100%;
  }
`;
const DetailsContainer = styled.div`
  color: #fff;
  position: relative;
  max-width: 700px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 8%;
    width: 100%;
    height: 90%;
    background: #a1673f;
    z-index: -1;
    border: 1rem solid #fff;
    border-radius: 2rem;
    box-sizing: border-box;
  }
  .content-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    padding: 0 2rem;
  }
  .chocolate_container {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    height: 360px;
    position: relative; /* If you want text inside of it */
    > * {
      position: absolute;
      top: 0;
      height: 100%;
    }
    @media (max-width: 330px) {
      height: 300px;
    }
  }
  .btnContainer {
    box-sizing: border-box;
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .testButton {
    height: 75px;
    width: 75px;
    border-radius: 15px;
    font-size: 2rem;
    // transform: translate(0.5em, 0.5em);
  }
  .add {
    // transform: translate(0.5em, 0.5em);
    // right: 0;
  }
  .subtract {
    // transform: translate(-0.5em, 0.5em);
    // left: 0;
  }
  h1 {
    font-size: 1.5rem;
  }
  .test {
    min-width: 160px;
    padding: 1em;
    word-wrap: break-word;
    flex: 1;
    span {
      float: right;
    }
  }
`;

export default Details;
