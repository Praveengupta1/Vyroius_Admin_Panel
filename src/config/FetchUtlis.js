import axios from "axios";
import { message } from "antd";

import { METHOD_TYPES } from "./API_METHOD";
import { Base_Url } from "./url";

function getHeaders(headerData) {
  //let token = localStorage.getItem("vyoriusUserAuth");
  let headers = "";
  if (!headerData) {
    headers = {
      "Content-Type": "application/json",
      // "x-access-token": token,
    };
    // headers.authorization = `bearer ${token}`;
  }
  if (headerData) {
    headers = {
      "Content-Type": "multipart/form-data",
      // "x-access-token": token,
    };
    //headers.authorization = `bearer ${token}`;
    // headers = { ...headers, ...headerData };
  }
  return headers;
}

export function fetchDataAndProceed(url, method, data, callback, headerData) {
  debugger;
  axios({
    method: method,
    params: method === METHOD_TYPES.GET ? data : {},
    data: method !== METHOD_TYPES.GET ? data : {},
    url: url,
    baseURL: Base_Url,
    headers: getHeaders(headerData),

    validateStatus: function (status) {
      debugger;
      return (status >= 200 && status < 300) || status === 412;
    },
  })
    .then((response) => {
      debugger;
      showMessage("success", response.data.message);
      callback(false, response.data);
    })
    .catch((error) => {
      localStorage.removeItem("signUp");
      debugger;
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        showMessage("error", error.response.data.message);
        callback(true, error);
      }
    });
}

export function showMessage(type, msg, time, onClose) {
  const Message = message[type];
  Message(msg, time, onClose);
}
