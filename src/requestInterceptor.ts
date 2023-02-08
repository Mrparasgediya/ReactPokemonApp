import axios, { InternalAxiosRequestConfig } from "axios";

export const addRequestInterceptor = () => {
  axios.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
      if (request && request.headers) {
        request.headers.Authorization = "Token";
      }
      return request;
    },
    (error) => Promise.reject(error)
  );
};
