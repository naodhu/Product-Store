import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";

const reducer = combineReducers({
  // Add reducers here
  products,
});

export default configureStore({ reducer });
