import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  addToCart,
  removeFromCart,
  removeAllFromCart
} from "../../store/actions/productSelection";
import PayPalButton from "./PayPal/PayPalButton";
import { storeProducts } from "../../data";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const total = products.reduce((previous, current) => {
    return previous + current.qty * storeProducts[current.name].price;
  }, 0);

  return (
    <CART>
      <CART_HEADER>
        <h1>Shopping Cart</h1>
      </CART_HEADER>
      <CART_BODY>
        <CART_ITEMS>
          <table>
            <thead>
              <tr>
                <th className="item_head">Item</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {products.map(product => {
                const imageLink = storeProducts[product.name].image;
                return (
                  <tr key={product.name} className="CART_ITEM">
                    <td className="title">
                      <img
                        src={require(`../../assets/images/${imageLink}.jpg`)}
                        alt="test"
                      />
                      <div className="item_title">
                        <span>{product.name}</span>
                        <button
                          className="REMOVE_BTN"
                          onClick={() =>
                            dispatch(removeAllFromCart(product.name))
                          }
                        >
                          Remove From Cart
                        </button>
                      </div>
                    </td>

                    <td>
                      <div className="qty_container">
                        <button
                          onClick={() => dispatch(removeFromCart(product.name))}
                          className="rmvBtn"
                        >
                          -
                        </button>
                        {product.qty}
                        <button
                          onClick={() => dispatch(addToCart(product.name))}
                          className="addBtn"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="SUB_TOTAL" data-label="Subtotal">
                      $
                      {(
                        product.qty * storeProducts[product.name].price
                      ).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CART_ITEMS>

        <CART_SUMMARY_CONTAINER>
          <CART_SUMMARY>
            <span className="summary">Summary</span>
            <span className="divider shipping-tax">Shipping and Tax</span>

            <table>
              <tbody>
                <tr className="divider">
                  <th>Subtotal</th>
                  <td>${total.toFixed(2)}</td>
                </tr>
                <tr className="divider">
                  <th>Order Total:</th>
                  <td>${total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            <PayPalButton total={5.32} />
          </CART_SUMMARY>
        </CART_SUMMARY_CONTAINER>
      </CART_BODY>
    </CART>
  );
};

const CART = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CART_HEADER = styled.div`
  h1 {
    font-family: "EB Garamond", serif;
    color: #533118;
    font-weight: 300;
  }
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`;

const CART_BODY = styled.div`
  // display: flex;
  // flex-wrap: wrap-reverse;
`;

const CART_ITEMS = styled.div`
  flex: 3;
  margin-right: 1rem;
  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    border-bottom: 1px solid #000;
    .item_head {
      text-align: left;
    }
    th {
      padding-bottom: 1rem;
    }
  }

  tr {
    vertical-align: top;
  }

  td {
    padding: 1rem;
  }

  .CART_ITEM {
    border-bottom: 1px solid #ccc;
    img {
      max-width: 120px;
    }
  }

  .title {
    // display: flex;
  }
  .item_title {
    text-align: left;
    font-weight: bold;
  }
  .REMOVE_BTN {
    display: block;
    background: #ba0017;
    color: #efefef;
    margin-top: 0.5rem;
    border: 0;
    padding: 0.5rem;
  }
  .qty_container {
    min-width: 100px;
    border: 1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      font-size: 1rem;
      background: none;
      border: 0;
    }
  }

  .SUB_TOTAL {
    min-width: 60px;
    text-align: center;
  }

  @media (max-width: 600px) {
    flex-basis: 100%;
    margin-right: 0;

    table {
      border: 0;
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
      height: auto;
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
    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
      padding: 1rem 0;
    }

    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
    .SUB_TOTAL {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const CART_SUMMARY_CONTAINER = styled.div`
  flex: 1;
`;

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
`;

export default Cart;
