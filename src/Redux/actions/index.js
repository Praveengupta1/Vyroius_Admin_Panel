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
        console.log(response.users);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.FETCH_USER_DATA,
          payload: response.users,
        });
      }
      if (error) {
        dispatch({
          type: actionType.FETCH_USER_DATA_FAILED,
        });
      }
    });
  };
}
