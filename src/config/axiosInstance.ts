import axios, { AxiosError, AxiosResponse } from 'axios';

import { CommonErrorResponseType } from '../types/types';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any, any>) => response.data,
  (error: AxiosError<CommonErrorResponseType>) => {
    if (error.response) {
      throw new Error(
        Object.values(error.response.data.errors).find((err) => err.length !== 0)
      );
    }
  }
);

export { axiosInstance };
