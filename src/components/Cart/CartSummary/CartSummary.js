import React from "react";
import styled from "styled-components";
import PayPalButton from "../../PayPal/PayPalButton";

const cartSummary = (props) => {
  return (
    <CART_SUMMARY>
      <thead>
        <th className="summary">Summary</th>
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
    </CART_SUMMARY>
  );
};

const CART_SUMMARY = styled.table`
  background: #333;
  box-sizing: border-box;
  color: #fff;
  flex: 1;
  order: 1;
  padding: 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  th {
    text-align: left;
  }
  td {
    text-align: right;
  }
`;

export default cartSummary;
