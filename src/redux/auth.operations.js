const { createAsyncThunk } = require('@reduxjs/toolkit');
const { authContactsAxios } = require('./authContacts.api');

const register = createAsyncThunk('auth/register', async credential => {
  try {
    const { data } = await authContactsAxios('/auth/signup', credential);
    return data;
  } catch (error) {
    console.log(error);
  }
});
// const logIn = createAsyncThunk('auth/login', async credential => {
//   try {
//     const { data } = await authContactsAxios('/auth/login', credential);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });
// const logOut = createAsyncThunk('auth/logout', async credential => {
//   try {
//     const { data } = await authContactsAxios('/auth/logout', credential);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });
// const current = createAsyncThunk('auth/current', async credential => {
//   try {
//     const { data } = await authContactsAxios('/auth/current', credential);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

export const authOperations = {
  register,
};
