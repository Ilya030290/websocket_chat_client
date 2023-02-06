import { axiosInstance } from '../config/axiosInstance';
import { LogOutResponse, UserResponse } from '../types/types';

export const authApi = {
  registration: (name: string, email: string, password: string) => {
    return axiosInstance.post<unknown, UserResponse>('/signup', {
      name,
      email,
      password,
    });
  },
  login: (email: string, password: string) => {
    return axiosInstance.post<unknown, UserResponse>('/login', { email, password });
  },
  logout: () => {
    return axiosInstance.get<unknown, LogOutResponse>('logout');
  },
};
