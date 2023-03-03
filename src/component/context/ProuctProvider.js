import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionType } from "../../state/action";
import {
  productInitialState,
  productReducer,
} from "../../state/ProudctReducer";

const PRODUCT_CONTEXT = createContext();

const ProuctProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, productInitialState);


//   console.log(state.cart);

  useEffect(() => {
    dispatch({ type: actionType.FETCHING_START });
    fetch("http://localhost:5000/Allproducts")
      .then((res) => res.json())
      .then((data) =>
      dispatch({ type: actionType.FETCHING_SUCCESS, payload: data})
       
      )
      .catch(()=>{
        dispatch({type: actionType.FETCHING_ERROR})
      })
  }, []);

  const value = {state, dispatch};

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProuctProvider;
