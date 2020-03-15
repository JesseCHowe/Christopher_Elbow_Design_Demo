import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { nextStep, setDimensions } from "../../../store/actions/bonBons";

const BoxSelection = () => {
  const dispatch = useDispatch();

  const data = [
    {
      name: "4 Piece Set",
      dimensions: [2, 2],
      img:
        "https://www.elbowchocolates.com/media/catalog/product/cache/ecf87c27ba4bf8a92b595f15216ef7d6/n/e/new_2017_4pc_final.jpg"
    },
    {
      name: "9 Piece Set",
      dimensions: [3, 3],
      img:
        "https://www.elbowchocolates.com/media/catalog/product/cache/ecf87c27ba4bf8a92b595f15216ef7d6/n/e/new_2017_9pc_final_2.jpg"
    },
    {
      name: "16 Piece Set",
      dimensions: [4, 4],
      img:
        "https://www.elbowchocolates.com/media/catalog/product/cache/ecf87c27ba4bf8a92b595f15216ef7d6/n/e/new_2017_16pc_final_2.jpg"
    },
    {
      name: "21 Piece Set",
      dimensions: [3, 7],
      img:
        "https://www.elbowchocolates.com/media/catalog/product/cache/ecf87c27ba4bf8a92b595f15216ef7d6/n/e/new_2017_21pc_final_3.jpg"
    },
    {
      name: "48 Piece Set",
      dimensions: [6, 8],
      img:
        "https://www.elbowchocolates.com/media/catalog/product/cache/ecf87c27ba4bf8a92b595f15216ef7d6/n/e/new_2017_48pc_final_11.jpg"
    }
  ];

  const selectedBox = dimensions => {
    dispatch(nextStep());
    dispatch(setDimensions(dimensions));
  };

  return (
    <BoxSelectionContainer>
      <h1>Select Size</h1>
      <ul>
        {data.map(o => {
          return (
            <li>
              <button onClick={() => selectedBox(o.dimensions)}>
                <h3>{o.name}</h3>
                <img src={o.img} alt={o.name} />
              </button>
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
  max-width: 1200px;
  margin: 0 auto;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: space-around;
    padding: 0;
    button {
      background: none;
      border: 0;
    }
  }
`;

export default BoxSelection;
