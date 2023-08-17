import Axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL;

export const contactApi = async (registrationData) => {
  const apiUrl = `${BACKEND_URL}/newRegistration`;
  try {
    const response = await Axios.post(apiUrl, registrationData);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching API:', error);
  }
}


export const loginApi = async (loginData) => {
  const apiUrl = `${LOGIN_URL}admin/login`;
  try {
    const loginresponse = await Axios.post(apiUrl, loginData);

    if (loginresponse.status !== 200) {
      throw new Error('Network loginresponse was not ok');
    }

    return loginresponse.data;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error; 
  }
}



export const dashboardlimitApi = async () => {
  try {
    const token = localStorage.getItem("accesstoken");

    if (!token) {
      throw new Error("Access token not found in local storage");
    }

    const headers = {
      'Authorization': `Bearer ${token}` // Use "Bearer" before the token
    };

    const apiUrl = `${LOGIN_URL}admin/getuserlist`;

    const dashboardLimitCount = await Axios.get(apiUrl, { headers });

    if (dashboardLimitCount.status !== 200) {
      throw new Error('Network response was not ok');
    }
   
    return dashboardLimitCount.data.response.userDetails;
    
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
};


