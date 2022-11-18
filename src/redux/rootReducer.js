import { combineReducers } from '@reduxjs/toolkit';
import { persistedAuthReduser } from './auth.slice';
import { persistedPhoneBookReduser } from './phoneBook.slice';

export const rootReducer = combineReducers({
  auth: persistedAuthReduser,
  phoneBook: persistedPhoneBookReduser,
});
