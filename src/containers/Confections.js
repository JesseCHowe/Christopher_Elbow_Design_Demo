import axios from "../axios";
import ConfectionBody from "../components/Confections/ConfectionBody/ConfectionBody";
import Header from "../components/UI/Header";
import React, { useState, useEffect } from "react";
import SortModal from "../components/Confections/SortModal";
import Spinner from "../components/UI/Spinner";

const Confections = () => {
  let [confectionData, setConfectionData] = useState(null);
  let [displaySort, setDisplaySort] = useState(false);

  useEffect(() => {
    if (!confectionData) {
      axios
        .get("https://christopher-elbow-demo.firebaseio.com/data.json")
        .then((response) => response.data)
        .then((data) => {
          const confections = data.products.filter(
            (o) => o.category === "Confections"
          );
          setConfectionData(confections);
        });
    }
  });

  let items;
  confectionData
    ? (items = (
        <ConfectionBody
          confectionData={confectionData}
          clicked={() => setDisplaySort(true)}
        />
      ))
    : (items = <Spinner />);

  return (
    <React.Fragment>
      <Header
        title={"Confections"}
        description={
          "From dark chocolate covered nuts to rich buttery toffee, these classic confections have been deliciously re-imagined with the highest quality gourmet chocolate and best ingredients from around the world."
        }
      />
      <SortModal display={displaySort} clicked={() => setDisplaySort(false)} />
      {items}
    </React.Fragment>
  );
};

export default Confections;
