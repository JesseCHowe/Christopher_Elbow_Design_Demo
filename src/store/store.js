import { createStore } from "redux";
import rootReducer from "./reducers";
import throttle from "lodash/throttle";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serialzedState = JSON.stringify(state);
    localStorage.setItem("cart", serialzedState);
  } catch (err) {
    console.log(err);
  }
};

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      products: store.getState().products
    });
  }, 1000)
);

export default store;
