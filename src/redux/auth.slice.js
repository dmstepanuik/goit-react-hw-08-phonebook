import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './auth.operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const authkSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: ({ addCase }) => {
    addCase(authOperations.register.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
    // addCase(addContact.fulfilled, (state, { payload }) => {
    //   console.log(payload);
    //   state.contacts.items.push(payload);
    // });
    // addCase(deleteContact.fulfilled, (state, { payload }) => {
    //   state.contacts.items = state.contacts.items.filter(
    //     it => it.id !== payload.id
    //   );
    // });
  },
});

// const persistConfig = {
//   key: 'react-07-phonebook',
//   storage,
// };

// export const persistedPhoneBookReduser = persistReducer(
//   persistConfig,
//   phoneBookSlice.reducer
// );
