import axios from 'axios';

const AxiosInstance = () => {
  axios.defaults.baseURL('https://upayments-studycase-api.herokuapp.com/api/')
};

export default AxiosInstance;
