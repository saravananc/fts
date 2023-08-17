import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_LOGIN_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accesstoken");
    if (!token) {
      throw new Error("Access token not found in local storage");
    }
    config.headers["content-type"] = "application/json";
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (err) {
    const status = err.response?.status || 500;
    // we can handle global errors here
    console.log(err);
    switch (status) {
      // authentication (token related issues)
      case 401: {
        return Promise.reject(new APIError(err.message, 409));
      }

      // forbidden (permission related issues)
      case 403: {
        return Promise.reject(new APIError(err.message, 409));
      }

      // bad request
      case 400: {
        return Promise.reject(new APIError(err.message, 400));
      }

      // not found
      case 404: {
        return Promise.reject(new APIError(err.message, 404));
      }

      // conflict
      case 409: {
        return Promise.reject(new APIError(err.message, 409));
      }

      // unprocessable
      case 422: {
        return Promise.reject(new APIError(err.message, 422));
      }

      // generic api error (server related) unexpected
      default: {
        return Promise.reject(new APIError(err.message, 500));
      }
    }
  }
);
