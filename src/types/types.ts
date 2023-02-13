import React from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { rootReducer } from '../redux/store';
import { LOADING, SUCCESS } from '../constants/constants';

export type AppRootActionsType = AnyAction;
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type DispatchActionType = ThunkDispatch<
  AppRootStateType,
  unknown,
  AppRootActionsType
>;
export const useAppDispatch = () => useDispatch<DispatchActionType>();

export interface UserInterface {
  _id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface ChatInterface {
  _id?: string;
  name: string;
}

export interface MessageInterface {
  _id?: string;
  name: string;
  user_id?: string;
  chat_id?: string;
  text: string;
  createdAt?: any;
  updatedAt?: any;
}

export interface AuthReducerState {
  isAuth: boolean;
  user: UserInterface | null;
  isOnline: boolean;
  errors: {
    login: string;
    signup: string;
  };
}

export interface AppReducerState {
  chat: ChatInterface;
  chats: ChatInterface[];
  message: MessageInterface;
  messages: MessageInterface[];
  loadingStatus: LoadingStatusType;
}

export interface Input {
  value: string;
  createNewChat: () => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CommonErrorResponseType {
  data: null;
  errors: {
    name: string;
    email: string;
    password: string;
  };
}

export interface UserResponse {
  user: UserInterface;
}

export interface LogOutResponse {
  logout: boolean;
}

export type LoadingStatusType = typeof LOADING | typeof SUCCESS;
