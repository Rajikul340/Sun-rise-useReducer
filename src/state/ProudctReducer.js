import { actionType } from "./action";

export const productInitialState = {
  loading: false,
  product: [],
  error: false,
  cart: [],
  whistlist: [],

};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionType.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actionType.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: false,
      };

    case actionType.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionType.ADD_TO_CART :
        return {
            ...state,
            cart: [...state.cart, action.payload]
        }  
    case actionType.REMOVE_FROM_CART:
        const newCartItems = state.cart.filter(item => item._id !== action.payload);
        return { ...state, cart: newCartItems };
    case actionType.ADD_TO_WHISTLIST :
        return {
            ...state,
            whistlist: [...state.whistlist, action.payload]
        }  

    default:
      return state;
  }
};
