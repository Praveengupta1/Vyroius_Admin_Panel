import * as actionTypes from "../actionType/index";
import State from "../state";

const reducer = (state = State, action) => {
  switch (action) {
    case actionTypes.FETCH_USER_DATA:
      return {
        ...state,
        users: action.payload,
        loading: true,
      };
    case actionTypes.FETCH_USER_DATA_FAILED:
      return { ...state, loadig: false };
    case actionTypes.LOADING:
      return { ...state, loading: true };
    default:
      return { state };
  }
};

export default reducer;
