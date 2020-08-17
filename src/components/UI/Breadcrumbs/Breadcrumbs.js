import React from "react";
import styled from "styled-components";

const Breadcrumbs = (props) => {
  return (
    <BreadCrumbs>
      <ul>
        {props.stages.map((stage,i) => {
          return (
            <li className={++i <= props.currentStep ? "active" : ""}>{stage}</li>
          )
        })}
      </ul>
    </BreadCrumbs>
  );
};

const BreadCrumbs = styled.div`
  width: 400px;
  margin: 50px auto;
  text-align: center;
  position: relative;
  ul {
    margin-bottom: 30px;
    overflow: hidden;
    counter-reset: step;
    li {
      list-style-type: none;
      color: #333;
      text-transform: uppercase;
      font-size: 10px;
      width: 33.33%;
      float: left;
      position: relative;
      &::before {
        content: counter(step);
        counter-increment: step;
        width: 30px;
        line-height: 30px;
        display: block;
        font-size: 1rem;
        color: #333;
        background: #fff;
        margin: 0 auto 5px auto;
      }
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background: white;
        position: absolute;
        left: -50%;
        top: 13px;
        z-index: -1;
      }
      &:first-child::after {
        content: none;
      }
    }
    li.active:before,
    li.active:after {
      background: #29211e;
      color: white;
    }
  }
`;

export default Breadcrumbs;
