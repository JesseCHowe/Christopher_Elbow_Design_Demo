import React from "react";
import styled from "styled-components";

const Tooltip = (props) => {
  return (
    <ToolTip>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </ToolTip>
  );
};

const ToolTip = styled.div`
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  display: none;
  font-size: 0.7em;
  max-width: 200px;
  padding: 7px 9px;
  position: absolute;
  text-align: left;
`;

export default Tooltip;
