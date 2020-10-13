import { fetchDataAndProceed } from "config/FetchUtlis";
import { METHOD_TYPES } from "config/API_METHOD";

export const getAllUsers = (data, callback) => {
  return fetchDataAndProceed("/users", METHOD_TYPES.GET, data, callback);
};
export const getAllEcosystems = (data, callback) => {
  return fetchDataAndProceed("/ecosystems", METHOD_TYPES.GET, data, callback);
};
export const getAllHUbs = (data, callback) => {
  return fetchDataAndProceed("/hubs", METHOD_TYPES.GET, data, callback);
};
export const getAllStations = (data, callback) => {
  return fetchDataAndProceed("/stations", METHOD_TYPES.GET, data, callback);
};
export const getAllDrones = (data, callback) => {
  return fetchDataAndProceed("/drones", METHOD_TYPES.GET, data, callback);
};
export const getAllBattery = (data, callback) => {
  return fetchDataAndProceed("/batteries", METHOD_TYPES.GET, data, callback);
};
export const getAllPayload = (data, callback) => {
  return fetchDataAndProceed("/payloads", METHOD_TYPES.GET, data, callback);
};
export const getAllSensor = (data, callback) => {
  return fetchDataAndProceed("/sensors", METHOD_TYPES.GET, data, callback);
};
export const getAllOrganization = (data, callback) => {
  return fetchDataAndProceed("/organizations", METHOD_TYPES.GET, data, callback);
};
export const acceptRequest = (data, callback) => {
  return fetchDataAndProceed("/acceptrequest", METHOD_TYPES.POST, data, callback);
};
export const rejectRequest = (data, callback) => {
  return fetchDataAndProceed("/rejectrequest", METHOD_TYPES.POST, data, callback);
};

