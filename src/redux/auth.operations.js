import { createAsyncThunk } from '@reduxjs/toolkit';
import { authContactsAxios, token } from './authContacts.api';

const register = createAsyncThunk('auth/register', async credential => {
  try {
    const { data } = await authContactsAxios.post('/users/signup', credential);
    console.log('data :>> ', data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
});
const logIn = createAsyncThunk('auth/login', async credential => {
  try {
    const { data } = await authContactsAxios.post('/users/login', credential);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
});
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await authContactsAxios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
});
const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  console.log('thunkAPI :>> ', thunkAPI);
  try {
    const { data } = await authContactsAxios.get('/users/current');
    console.log('data ok :>> ', data);
    return data;
  } catch (error) {
    console.log('error', error);
    thunkAPI.rejectWithValue(error.response.data);
  }
});

export const authOperations = {
  register,
  logIn,
  logOut,
  current,
};
