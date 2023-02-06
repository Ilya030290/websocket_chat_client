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
  },
  extraReducers: (builder) => {
    builder.addCase(logOutUser.fulfilled, (state) => {
      state.user = null;
      state.isAuth = false;
    });
  },
});

export const authReducer = slice.reducer;

export const { setUser, setIsAuth, setIsOnline } = slice.actions;

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
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(setLoadingStatus(SUCCESS));
    }
  }
);

export const logOutUser = createAsyncThunk(LogOutUser, async (param, thunkAPI) => {
  thunkAPI.dispatch(setLoadingStatus(LOADING));
  try {
    await authApi.logout();
  } catch (error) {
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
