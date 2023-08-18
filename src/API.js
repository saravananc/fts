import Axios from 'axios';
import axiosInstance from './Config/interceptor';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL;

export const contactApi = async (registrationData) => {
  const apiUrl = `${BACKEND_URL}/newRegistration`;
  try {
    const response = await Axios.post(apiUrl, registrationData);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response?.data;
  } catch (error) {
    console.error('Error fetching API:', error);
  }
}


export const loginApi = async (loginData) => {
  const apiUrl = `admin/login`;
  try {
    const loginresponse = await axiosInstance.post(apiUrl, loginData);
    return loginresponse.data;
  } catch (error) {
    console.error(error);
    throw error
  }
}



export const dashboardlimitApi = async () => {
  try {
    const apiUrl = `admin/getuserlist`;
    const dashboardLimitCount = await axiosInstance.get(apiUrl);   
    return dashboardLimitCount?.data?.response?.userDetails;
  } catch (error) {
    console.error('Error fetching API:', error);
    return error
  }
};


