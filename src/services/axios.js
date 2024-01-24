import axios from "axios";
import { store } from "@redux/store";
import { NOTIFICATION_MESSAGE } from "@constants/constant";
const onRequest = (config) => {
  const token = store.getState().auth.idToken;

  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return Promise.resolve(response);
};

const onResponseError = async (error) => {
  if (error?.response) {
    switch (error.response.status) {
      case 500:
        return Promise.reject(
          error?.response.data["500 INTERNAL_SERVER_ERROR"]
        );
      case 401:
        return Promise.reject(NOTIFICATION_MESSAGE.UNAUTHORIZE);
      case 404:
        return Promise.reject(NOTIFICATION_MESSAGE.NOT_FOUND);
      case 400:
        return Promise.reject(
          error?.response?.data["400 BAD_REQUEST"] ??
            NOTIFICATION_MESSAGE.SOMETHING_WRONG
        );
      default:
        return Promise.reject(NOTIFICATION_MESSAGE.SOMETHING_WRONG);
    }
  } else {
    return Promise.reject(error);
  }
};

const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export const api = setupInterceptorsTo(
  axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  })
);
