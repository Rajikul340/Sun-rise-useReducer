import { actionType } from "./action";

export const productInitialState = {
  loading: false,
  product: [],
  error: false,
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

    default:
      return state;
  }
};
