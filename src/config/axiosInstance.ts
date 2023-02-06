import axios, { AxiosError, AxiosResponse } from 'axios';

import { CommonErrorResponseType } from '../types/types';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any, any>) => response.data,
  (error: AxiosError<CommonErrorResponseType>) => {
    console.error(error.response?.data);

    throw new Error(error.response?.data.error.message || 'Something went wrong!');
  }
);

export { axiosInstance };
