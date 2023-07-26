import Axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

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
};
