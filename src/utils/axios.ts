import axios, { Axios } from 'axios';
import { AuthResponse } from 'types/authResponse';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  maxRedirects: 0,
  timeoutErrorMessage: 'Time out. Please Try again...',
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = sessionStorage.getItem('@app/token');
    if (token) {
      const data: AuthResponse = JSON.parse(token);
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${data.accessToken}`,
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (axios.isAxiosError(error)) {
      let message = error.response?.data;
      console.log('error.response?.status', error.response?.status);

      if (error.response?.status === 401) {
        message = '401';
      }
      return Promise.reject(new Error(message));
    } else {
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
