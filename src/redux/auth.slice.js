import { createSlice, current } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { authOperations } from './auth.operations';
import { token } from './authContacts.api';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: ({ addCase }) => {
    addCase(authOperations.register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
    addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
    addCase(authOperations.logOut.fulfilled, state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    });
    addCase(authOperations.logOut.rejected, state => {
      state.isLoggedIn = false;
    });

    addCase(authOperations.current.fulfilled, (state, { payload }) => {
      console.log('payload fulfilled :>> ', payload);
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    });

    addCase(authOperations.current.rejected, state => {
      console.log('payload rejected :>> ');
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    });
  },
});

const persistConfig = {
  key: 'react-08-auth',
  storage,
};

export const persistedAuthReduser = persistReducer(
  persistConfig,
  authSlice.reducer
);