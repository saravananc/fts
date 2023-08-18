import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_LOGIN_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    console.log(config);
    const token = localStorage.getItem("accesstoken");
    if (!token && !config?.url?.includes('/admin/login')) {
      throw new Error("Access token not found in local storage");
    }
    config.headers["content-type"] = "application/json";
    if (!config?.url?.includes('/admin/login')) {
      config.headers.Authorization = `Bearer ${token}`;
    }
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
        
        throw new Error(err?.response?.data?.message);
      }
      // forbidden (permission related issues)
      case 403: {
        throw new Error(err?.response?.data?.message);

      }
      // bad request
      case 400: {
        throw new Error(err?.response?.data?.message);
      }
      // not found
      case 404: {
        throw new Error(err?.response?.data?.message);
      }
      // conflict
      case 409: {
        throw new Error(err?.response?.data?.message);
      }
      // unprocessable
      case 422: {
        throw new Error(err?.response?.data?.message);
      }
      // generic api error (server related) unexpected
      default: {
        throw new Error("Please try again later");
      }
    }
  }
);

export default axiosInstance;