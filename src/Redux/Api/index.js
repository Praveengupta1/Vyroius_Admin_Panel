import { fetchDataAndProceed } from "config/FetchUtlis";
import { METHOD_TYPES } from "config/API_METHOD";
export const getAllUsers = (data, callback) => {
  return fetchDataAndProceed("/users", METHOD_TYPES.GET, data, callback);
};
