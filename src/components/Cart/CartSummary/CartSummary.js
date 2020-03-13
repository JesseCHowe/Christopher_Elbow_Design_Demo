import React from "react";
import styled from "styled-components";
import PayPalButton from "../../PayPal/PayPalButton";

const cartSummary = props => {
  return (
    <CART_SUMMARY>
      <span className="summary">Summary</span>
      <span className="divider shipping-tax">Shipping and Tax</span>

      <table>
        <tbody>
          <tr className="divider">
            <th>Subtotal</th>
            <td>${props.total.toFixed(2)}</td>
          </tr>
          <tr className="divider">
            <th>Order Total:</th>
            <td>${props.total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <PayPalButton total={props.total} />
    </CART_SUMMARY>
  );
};

const CART_SUMMARY = styled.div`
  background: #efefef;
  position: sticky;
  margin-bottom: 2rem;
  top: 1rem;
  padding: 1rem;
  min-width: 300px;
  box-sizing: border-box;
  .summary {
    display: block;
    font-size: 1.5rem;
    font-weight: 400;
    padding-bottom: 1rem;
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
    padding-top: 1rem;
  }
  td {
    text-align: right;
  }
  th,
  td {
    padding-top: 1rem;
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
