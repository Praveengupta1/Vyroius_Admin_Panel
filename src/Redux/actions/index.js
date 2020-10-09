import * as actionType from "../actionType/index";
import * as API from "../Api/index";
import { showMessage } from "config/FetchUtlis";

export function getusers(paylaod, callback) {
  return function (dispatch) {
    API.getAllUsers(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        dispatch({
          type: actionType.FETCH_USER_DATA,
          paylaod: response,
        });
      }
      if (!error) {
        dispatch({
          type: actionType.FETCH_USER_DATA_FAILED,
        });
      }
    });
  };
}
