import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  nextStep,
  setDimensions,
  setBonBon,
} from "../../store/actions/bonBons";
import data from "./boxData";

const BoxSelection = () => {
  const dispatch = useDispatch();

  const selectedBox = (o) => {
    dispatch(nextStep());
    dispatch(setDimensions(o.dimensions));
    dispatch(setBonBon(o));
  };

  return (
    <BoxSelectionContainer>
      <ul>
        {data.map((o) => {
          return (
            <li>
              <button onClick={() => selectedBox(o)}>
                <img
                  alt={o.name}
                  src={require(`../../assets/images/${o.image}.png`)}
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
button {
  background: none;
  border: none;
  flex: 1;
}
img {
  max-width: fit-content;
  width: 100%;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
}
`;

export default BoxSelection;