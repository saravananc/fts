import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_LOGIN_URL,
  timeout: 10000,
});


async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refreshtoken");
  const apiUrl = `${process.env.REACT_APP_LOGIN_URL}/admin/refreshToken`;
  try {
    const response = await Axios.post(apiUrl, { refreshToken: refreshToken });
    localStorage.clear();
    console.log(response);
    if(response?.status === 200){
      localStorage.setItem("accesstoken", response?.data?.response?.accesstoken); 
      localStorage.setItem("refreshtoken",response?.data?.response?.refreshtoken);
    }else{
      window.location.replace('/admin')
    }
    return response?.data?.response?.accesstoken;
  } catch (error) {
    console.error('Error fetching API:', error);
  }
}

axiosInstance.interceptors.request.use(
  async function (config) {
    console.log(config);
    const token = localStorage.getItem("accesstoken");
    console.log(config?.url, !token && !config?.url?.includes('/admin/login'), "-----------------");
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
  async function (err) {
    const status = err.response?.status || 500;
    // we can handle global errors here
    const originalRequest = err.config;

    switch (status) {
      // authentication (token related issues)
      case 401: {
        originalRequest._retry = true;
        const access_token = await refreshAccessToken();
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
       setTimeout(() => {
         return axiosInstance(originalRequest);
       }, 2000);
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