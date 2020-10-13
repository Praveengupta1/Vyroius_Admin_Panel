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
export function getEcosystems(paylaod, callback) {
  return function (dispatch) {
    API.getAllEcosystems(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        console.log(response.ecosystem);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.FETCH_ECOSYSTEMS,
          payload: response.ecosystem,
        });
      }
      if (error) {
        dispatch({
          type: actionType.FETCH_ECOSYSTEMS_FAILED,
        });
      }
    });
  };
}
export function getHubs(paylaod, callback) {
  return function (dispatch) {
    API.getAllHUbs(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        console.log(response.hub);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.FETCH_HUBS,
          payload: response.hub,
        });
      }
      if (error) {
        dispatch({
          type: actionType.FETCH_HUBS_FALIED,
        });
      }
    });
  };
}
export function getStations(paylaod, callback) {
  return function (dispatch) {
    API.getAllStations(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        console.log(response.station);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.FETCH_STATIONS,
          payload: response.station,
        });
      }
      if (error) {
        dispatch({
          type: actionType.FETCH_STATIONS_FAILED,
        });
      }
    });
  };
}
export function getDrones(paylaod, callback) {
  return function (dispatch) {
    API.getAllDrones(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        console.log(response.drone);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.FETCH_DRONES,
          payload: response.drone,
        });
      }
      if (error) {
        dispatch({
          type: actionType.FETCH_DRONES_FAILED,
        });
      }
    });
  };
}
export function getBattery(paylaod, callback) {
  return function (dispatch) {
    API.getAllBattery(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        console.log(response.battery);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.FETCH_BATTERY,
          payload: response.battery,
        });
      }
      if (error) {
        dispatch({
          type: actionType.FETCH_BATTERY_FAILED,
        });
      }
    });
  };
}
export function getPayload(paylaod, callback) {
  return function (dispatch) {
    API.getAllPayload(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        console.log(response.payload);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.FETCH_PAYLOAD,
          payload: response.payload,
        });
      }
      if (error) {
        dispatch({
          type: actionType.FETCH_PAYLOAD_FAILED,
        });
      }
    });
  };
}
export function getSensor(paylaod, callback) {
  return function (dispatch) {
    API.getAllSensor(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        console.log(response.sensor);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.FETCH_SEONSOR,
          payload: response.sensor,
        });
      }
      if (error) {
        dispatch({
          type: actionType.FETCH_SEONSOR_FAILED,
        });
      }
    });
  };
}
export function getOrganizations(paylaod, callback) {
  return function (dispatch) {
    API.getAllOrganization(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        console.log(response.adminorg);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.FETCH_ORGANIZATION,
          payload: response.adminorg,
        });
      }
      if (error) {
        dispatch({
          type: actionType.FETCH_ORGANIZATION_FAILED,
        });
      }
    });
  };
}
export function acceptRequest(paylaod, callback) {
  return function (dispatch) {
    API.acceptRequest(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        console.log(response.updateAdmin);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.ACCEPT_REQUEST,
        payload: response.updateAdmin,
        });
      }
      if (error) {
        dispatch({
          type: actionType.ACCEPT_REQUEST_FAILED,
        });
      }
    });
  };
}
export function rejectRequest(paylaod, callback) {
  return function (dispatch) {
    API.rejectRequest(paylaod, (error, response) => {
      dispatch({
        type: actionType.LOADING,
      });
      if (!error) {
        console.log(response);
        showMessage("success", response.message && response.message);
        dispatch({
          type: actionType.REJECT_REQUEST,
          payload: response.updateAdmin,
        });
      }
      if (error) {
        dispatch({
          type: actionType.REJECT_REQUEST_FAILED,
        });
      }
    });
  };
}
