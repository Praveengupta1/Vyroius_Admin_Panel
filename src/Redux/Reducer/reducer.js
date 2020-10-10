import * as ACTION_TYPE from "../actionType/index";

const initailState = {
  loading: false,
  users: [],
};

const Reducer = (state = initailState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOADING:
      return { ...state, loading: true };

    case ACTION_TYPE.FETCH_USER_DATA:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case ACTION_TYPE.FETCH_USER_DATA_FAILED:
      return state;
    default:
      return state;
  }
};

export default Reducer;
