import React, { useState } from "react";
import styled from "styled-components";
import NavSelection from "../NavLink/NavLink";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);

  const toggle = () =>  setOpen(!open);
  function handleOnClick(item) {
    setSelection(item)
    toggle();
  };

  let all;
  if (props.all === true) {
    all = (
      <li onClick={() => handleOnClick('all')}> 
        <NavSelection page={props.url}>All</NavSelection>
      </li>
    );
  }

  const dropDownItems = (
  <React.Fragment>
      {all}
      {props.category.map(category => {
        const subUrl = category.url;
        return (
          <li key={category.name} onClick={() => handleOnClick(category.name)}>
              <NavSelection page={`${props.url}/${subUrl}`}>
                {category.name}
              </NavSelection>
            </li>  
        )
      })}

    </React.Fragment>
  );

  return (
    <Wrapper>
      <Test>
      <Header
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
      <HeaderTitle>
        <p>Select</p>
      </HeaderTitle>
      <HeaderAction>
        <p>{selection}</p>
      </HeaderAction>
      </Header>
      {
        open && (

          <List>
            {dropDownItems}
          </List>
        )
      }
      </Test>
    </Wrapper>
  );
};

const List = styled.ul`
background: #fff;
margin: 0;
padding: 0;
// height: 100vh;
// position: fixed;
// width: 100%;
// top: 0;
// left: 0;
li {
  list-style-type:none;
  margin: 0;
  color: #000;
}
`;


const Wrapper = styled.div`
  display: flex;
  min-height: 38px;
  margin: 0 auto;
  max-width: 400px;
  position: relative;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-bottom: 2.5rem;
  display: none;
  @media (max-width: 750px) {
    display: block;
  }
`;

const Test = styled.div`
position: absolute;
z-index: 100;
width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  border-bottom: 1px solid #333;
`;
const HeaderTitle = styled.div``;
const HeaderAction = styled.div``;

export default Dropdown;
