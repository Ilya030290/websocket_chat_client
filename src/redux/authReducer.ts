import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { setLoadingStatus } from './appReducer';
import {
  AuthReducer,
  LOADING,
  LoginUser,
  LogOutUser,
  SignUpUser,
  SUCCESS,
} from '../constants/constants';
import { authApi } from '../api/authApi';
import { AppRootStateType, AuthReducerState, UserInterface } from '../types/types';

const initialState: AuthReducerState = {
  isAuth: false,
  user: null,
  isOnline: false,
  errors: {
    login: '',
    signup: '',
  },
};

const slice = createSlice({
  name: AuthReducer,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInterface>) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setIsOnline: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
    setNewLoginError: (state, action: PayloadAction<string>) => {
      state.errors.login = action.payload;
    },
    setNewSignUpError: (state, action: PayloadAction<string>) => {
      state.errors.signup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logOutUser.fulfilled, (state) => {
      state.user = null;
      state.isAuth = false;
    });
  },
});

export const authReducer = slice.reducer;

export const { setUser, setIsAuth, setIsOnline, setNewLoginError, setNewSignUpError } =
  slice.actions;

export const loginUser = createAsyncThunk(
  LoginUser,
  async (params: { email: string; password: string }, thunkAPI) => {
    thunkAPI.dispatch(setLoadingStatus(LOADING));
    try {
      const { email, password } = params;
      const response = await authApi.login(email, password);

      if (response.user) {
        thunkAPI.dispatch(setUser(response.user));
        thunkAPI.dispatch(setIsAuth(true));
      }
    } catch (error: any) {
      thunkAPI.dispatch(setNewLoginError(error.toString()));
    } finally {
      thunkAPI.dispatch(setLoadingStatus(SUCCESS));
    }
  }
);

export const signUpUser = createAsyncThunk(
  SignUpUser,
  async (params: { name: string; email: string; password: string }, thunkAPI) => {
    thunkAPI.dispatch(setLoadingStatus(LOADING));
    try {
      const { name, email, password } = params;
      const response = await authApi.registration(name, email, password);

      if (response.user) {
        thunkAPI.dispatch(setUser(response.user));
        thunkAPI.dispatch(setIsAuth(true));
      }
    } catch (error: any) {
      thunkAPI.dispatch(setNewSignUpError(error.toString()));
    } finally {
      thunkAPI.dispatch(setLoadingStatus(SUCCESS));
    }
  }
);

export const logOutUser = createAsyncThunk(LogOutUser, async (param, thunkAPI) => {
  thunkAPI.dispatch(setLoadingStatus(LOADING));
  try {
    await authApi.logout();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error);
  } finally {
    thunkAPI.dispatch(setLoadingStatus(SUCCESS));
  }
});

const getUser = (state: AppRootStateType): UserInterface | null => state.auth.user;

export const selectUser = createSelector(getUser, (user: UserInterface | null) => user);

const getIsAuth = (state: AppRootStateType): boolean => state.auth.isAuth;

export const selectIsAuth = createSelector(getIsAuth, (isAuth: boolean) => isAuth);

const getIsOnline = (state: AppRootStateType): boolean => state.auth.isOnline;

export const selectIsOnline = createSelector(
  getIsOnline,
  (isOnline: boolean) => isOnline
);

const getLoginError = (state: AppRootStateType): string => state.auth.errors.login;

export const selectLoginError = createSelector(getLoginError, (error: string) => error);

const getSignUpError = (state: AppRootStateType): string => state.auth.errors.signup;

export const selectSignUpError = createSelector(getSignUpError, (error: string) => error);
