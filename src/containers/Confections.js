import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import axios from "../axios";
import styled from "styled-components";
import CategoryNav from "../components/CategoryNav/CategoryNav";
import Spinner from "../components/UI/Spinner/Spinner";
import Topic from "../components/Topic/Topic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faThList } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../components/UI/Dropdown/Dropdown";

const Confections = () => {
  let [confectionData, setConfectionData] = useState(null);
  let [descriptionData, setDescriptionData] = useState(null);
  let [displayDrop, setDisplayDrop] = useState(false);
  let [sortMode, setSortMode] = useState('default')
  let [itemView, setItemView] = useState('gallery');

  function handleDropdownClick(sort) {
    setSortMode(sort);
    setDisplayDrop(false);
  }

  const mySortFuncs = {
    default: (a,b) => { 
      if(a.category2 < b.category2) { return -1; }
      if(a.category2 > b.category2) { return 1; }
      return 0;
    },
    nameDesc: (a,b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    },
    nameAsc: (a,b) => {
      if(a.name < b.name) { return 1; }
      if(a.name > b.name) { return -1; }
      return 0;
    },
    priceDesc: (a,b) => {
      return b.price - a.price
    },
    priceAsc: (a,b) => {
      return a.price - b.price
    }
  }
  const { path } = useRouteMatch();

  useEffect(() => {
    if (!confectionData) {
      axios
        .get("https://christopher-elbow-demo.firebaseio.com/data.json")
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          const confections = data.products.filter(
            (o) => o.category === "Confections"
          );
          setConfectionData(confections);
          let [description] = data.descriptions.filter(
            (o) => o.category === "Confections"
          );
          setDescriptionData(description);
        });
    }
  });



  let category;
  let dropdown;
  let confections = <Spinner />;

  if (confectionData && descriptionData) {
    const unique = [...new Set(confectionData.sort(mySortFuncs[sortMode]).map((item) => item.category2))];
    let confectionCatNav = unique.map((o) => {
      return {
        name: o,
        url: o.split(" ").join("_"),
      };
    });
    category = (
      <CategoryNav
        all="true"
        category={confectionCatNav}
        description={descriptionData}
        url={path}
      />
    );
    dropdown = (
      <Dropdown
        all="true"
        category={confectionCatNav}
        description={descriptionData}
        url={path}
      />
    );
    confections = <Topic category={confectionData} viewMode={itemView}/>;
  }

  let drop;
  if(displayDrop) {
    drop = (
               <div className="dropdown-content">
            <button onClick={() => handleDropdownClick('default')}>Default</button>
            <button onClick={() => handleDropdownClick('priceDesc')}>Lowest Price</button>
            <button onClick={() => handleDropdownClick('priceAsc')}>Highest Price</button>
            <button onClick={() => handleDropdownClick('nameDesc')}>A-Z</button>
            <button onClick={() => handleDropdownClick('nameAsc')}>Z-A</button>
          </div> 
    )
  }


  
  return (
    <ConfectionWrapper>
      <ConfectionsTitle>
        <h2>Confections</h2>
        <p>
          From dark chocolate covered nuts to rich buttery toffee, these classic
          confections have been deliciously re-imagined with the highest quality
          gourmet chocolate and best ingredients from around the world.
        </p>
      </ConfectionsTitle>
      <SortControls>
        <div className="dropdown">
          <button onClick={() => setDisplayDrop(!displayDrop)} className="dropbtn">
            <div class="drop-text">
              <span>Sort</span>
              <span class="drop-text-mode">{sortMode}</span>
            </div>
          </button>
          {drop}
        </div>
        <div className="other">
          <div className="sort-view dropbtn">
            <button onClick={() => setItemView('list')}>
              <FontAwesomeIcon icon={faThList} className={itemView === 'list' ? 'active': ''}/>
            </button>
            <button onClick={() => setItemView('gallery')}>
              <FontAwesomeIcon icon={faThLarge} className={itemView === 'gallery' ? 'active': ''}/>
            </button>
          </div>
        </div>
      </SortControls>
      <ConfectionsContainer>
        {dropdown}
        {category}
        <Route path={`${path}/:topicId?`}>{confections}</Route>
      </ConfectionsContainer>
    </ConfectionWrapper>
  );
};

const ConfectionWrapper = styled.div`
padding: 1rem;
`;

const SortControls = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 1rem;
  column-gap: 1rem;
  .other {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    text-align: center;
  }
  .sort-view {
    grid-column-start: 3;
    grid-column-end: 4;
    box-sizing: border-box;
    width: fit-content;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    .drop-text{
      display: flex;
      justify-content: space-between;
    }
    .drop-text-mode{
      font-weight: bold;
      text-transform: capitalize;
    }
  }
  .dropdown-content {
    display: block;
    position: absolute;
    background-color: #efefef;
    z-index: 500;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #000;
    border-radius: 0;
    button {
      display: block;
      width: 100%;
      border: 0;
      border-bottom: 1px solid #333;
      padding: 0.2rem;
      text-align: left;
    }
  }
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  
  }
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  .show {
    display: block;
  }
  .sort-view {
    display: flex;
    justify-content: space-around;
  }
  .sort-view button {
    border: none;
    color: gray;
    font-size: 1.5rem;
  }
  .sort-view .active {
    color: #333;
  }
  .dropbtn {
    color: #333;

    padding: 16px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    width: 100%;
  }
`;

const ConfectionsTitle = styled.div`
  h2 {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: bold;
    color: #333;
    margin: 0;
    padding: 0;
  }
  max-width: 600px;
  margin: 0 auto;
  font-weight: 200;
  @media(max-width: 550px) {
    max-width: 400px;
    margin: 0 auto;
    h2 {
      font-size: 2rem;
      text-align: left;
    }
  }
`;

const ConfectionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;
  margin: 0 auto;
  max-width: 1200px;
  // padding: 1rem;
  box-sizing: border-box;
  @media (max-width: 750px) {
    display: block;
  }
`;

export default Confections;
