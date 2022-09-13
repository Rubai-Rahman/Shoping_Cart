import React, { createContext, useContext } from "react";
import useCart from "../../hooks/useCart";
import useFilter from "../../hooks/useFilter";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useCart([]);
  const [productState, productDispatch] = useFilter([]);
  //get products
 
  return <Cart.Provider value={{ state, dispatch,productState,productDispatch }}>{children}</Cart.Provider>;
};
export const CartState = () => {
  return useContext(Cart);
};

export default Context;
