import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { nextStep, setDimensions, setBonBon } from "../../../store/actions/bonBons";

const BoxSelection = () => {
  const dispatch = useDispatch();

  const data = [
    {
      name: "4 Piece Gourmet Chocolate Assortment",
      dimensions: [2, 2],
      image: 'box_4pc',
    price: 11.95
      },
    {
      name: "9 Piece Gourmet Chocolate Assortment",
      dimensions: [3, 3],
      image:'box_9pc',
        price: 22.95
    },
    {
      name: "16 Piece Gourmet Chocolate Assortment",
      dimensions: [4, 4],
      image: 'box_16pc',
        price: 38.95
    },
    {
      name: "21 Piece Gourmet Chocolate Assortment",
      dimensions: [3, 7],
      image: 'box_21pc',
        price: 48.95
    },
    {
      name: "48 Piece Gourmet Chocolate Assortment",
      dimensions: [6, 8],
      image: 'box_48pc',
      price: 98.95
    }
  ];

  const selectedBox = o => {
    dispatch(nextStep());
    dispatch(setDimensions(o.dimensions));
    dispatch(setBonBon(o));
  };

  return (
    <BoxSelectionContainer>
      <ul>
        {data.map(o => {
          return (
            <li>
              <button onClick={() => selectedBox(o)}>
                <img
                alt={o.name}
                src={require(`../../../assets/images/${o.image}.png`)}
                />
              </button>
              <div className="desc">
              <h3>{o.name}</h3>
                <p className="price">${o.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </BoxSelectionContainer>
  );
};

const BoxSelectionContainer = styled.div`
  h1 {
    text-align: center;
    color: var(--elbowBrown);
    font-family: "Cabin", sans-serif;
    font-weight: 200;
    text-transform: uppercase;
  }
  .desc {
    text-align: center;
  }
  h3 {
    // margin: 0.25rem;
  }
  .price {
    color: gray;
    font-weight: bold;
    // margin: 0.25rem;
  }
  max-width: 1000px;
  margin: 0 auto;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: space-around;
    padding: 0;
    @media(max-width: 550px){
      display: block;
    }
    li {
      margin-bottom: 1rem;
      flex: 1;
      // padding: 2rem;
    }
    button {
      background: none;
      border: 0;
      margin: 0 auto;
      width: 100%;
    }
  }
`;

export default BoxSelection;
