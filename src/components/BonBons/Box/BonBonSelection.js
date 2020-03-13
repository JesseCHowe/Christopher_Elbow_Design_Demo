import React from "react";
import { useDispatch } from "react-redux";
import { addBonBon, bonBonSelection } from "../../../store/actions/bonBons";

const BonBonSelection = () => {
  const dispatch = useDispatch();

  const addBonBonDisaptch = flavor => {
    dispatch(addBonBon(flavor));
    dispatch(bonBonSelection(false));
  };
  return (
    <div>
      <button onClick={() => addBonBonDisaptch("smk-maple")}>BonBon</button>
      <button onClick={() => addBonBonDisaptch("smk-maple")}>BonBon</button>
      <button onClick={() => addBonBonDisaptch("smk-maple")}>BonBon</button>
      <button onClick={() => addBonBonDisaptch("smk-maple")}>BonBon</button>
      <button onClick={() => addBonBonDisaptch("smk-maple")}>BonBon</button>
      <button onClick={() => addBonBonDisaptch("smk-maple")}>BonBon</button>
    </div>
  );
};

export default BonBonSelection;
