import React from "react";
import { useReducer } from "react";
import CartReducer from "../components/Reducer/CartReducer";

const useCart = () => {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
  });
  return [state, dispatch];
};

export default useCart;
