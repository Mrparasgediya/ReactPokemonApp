import axios, { AxiosResponse } from "axios";

export const addResponseInterceptor = () => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data;
    },
    (error) =>
      Promise.reject({
        message: "Error on api call",
      })
  );
};
