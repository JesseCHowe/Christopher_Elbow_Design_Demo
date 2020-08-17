import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";

const CartBody = props => {
  return (
    <CART_ITEMS>
      <tbody>
        {props.products.map(product => {
          return <CartItem key={product.name} product={product} />;
        })}
      </tbody>
    </CART_ITEMS>
  );
};


const CART_ITEMS = styled.table`
  flex: 3;
  margin-right: 1rem;
  width: 100%;
  border-top: 1rem solid #efefef;
  // border-collapse: collapse;

  thead {
    .item_head {
      text-align: left;
    }
    th {
      padding-bottom: 1rem;
    }
  }
  tbody {
    border-spacing: 15px;
  }

  tr {
    vertical-align: top;
  }

  td {
    padding: 1rem;
    vertical-align: middle;
  }
  img {
    border-radius: 15px;
  }
  .item_title {
    text-align: left;
    font-weight: bold;
    margin-bottom: 0;
    color: gray;

  }
  .item_price {
    margin-top: 0.2rem;
    text-align: left;
    font-weight: bold;
  }

  .SUB_TOTAL {
    min-width: 60px;
    text-align: center;
  }

  @media (max-width: 750px) {
    flex-basis: 100%;
    margin-right: 0;

    table {
      border: 0;
    }
    .title {
      display: block;
    }
    .CART_ITEM {
      padding: 1rem;
      font-size: 1rem;
      border-bottom: 5px solid #ccc;
    }
    table caption {
      font-size: 1.3em;
    }
    img {
      display: block;
    }
    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      display: block;
      margin: 0 auto;
    }
    .qty_container {
      max-width: 200px;
      margin: 0 auto;
      padding: 0.25rem;
    }
    // table td {
    //   // border-bottom: 1px solid #ddd;
    //   display: block;
    //   font-size: 0.8em;
    //   text-align: right;
    //   padding: 1rem 0;
    // }

    // table td::before {
    //   content: attr(data-label);
    //   float: left;
    //   font-weight: bold;
    //   text-transform: uppercase;
    // }

  }
`;

export default CartBody;
