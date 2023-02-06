import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { authReducer } from './authReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});
