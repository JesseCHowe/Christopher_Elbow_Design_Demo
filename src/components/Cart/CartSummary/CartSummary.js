import React from "react";
import styled from "styled-components";
import PayPalButton from "../../PayPal/PayPalButton";

const cartSummary = props => {
  return (
    <CART_SUMMARY>
      <table>
        <thead>
          <th className="summary"> 
          Summary
          </th>
        </thead>
        <tbody>
          <tr className="divider">
            <th>Shipping and Tax</th>
            <td>$0.00</td>
          </tr>
          <tr className="divider">
            <th>Subtotal</th>
            <td>${props.total.toFixed(2)}</td>
          </tr>
          <tr className="divider">
            <th>Order Total:</th>
            <td className="total">${props.total.toFixed(2)}</td>
          </tr>
          <tr>
            <th>
            <PayPalButton total={props.total} />
            </th>
          </tr>
        </tbody>
      </table>

    </CART_SUMMARY>
  );
};

const CART_SUMMARY = styled.div`
  background: #333;
  color: #fff;
  position: sticky;
  margin-bottom: 2rem;
  margin-right: 1rem;
  top: 0rem;
  padding: 1rem;
  border-top: 1rem solid #efefef;
  min-width: 300px;
  width: 100%;
  box-sizing: border-box;
  flex:1;
  .total{
    color: lightblue;
    font-weight: bold;
  }
  .summary {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .shipping-tax {
    display: block;
    padding: 0.5rem 0;
  }
  .divider {
    border-top: 1px solid #ccc;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    font-weight: 400;
  }
  th {
    text-align: left;
  }
  tr {
    // padding-top: 1rem;
  }
  td {
    text-align: right;
  }
  th,
  td {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
  @media (max-width: 750px) {
    display: block;
    margin: 0;
    width: 100%;
    position: relative;
    top: 0;
  }
`;

export default cartSummary;
