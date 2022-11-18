import { createSelector } from '@reduxjs/toolkit';

export const contactsFilterSelector = state => state.phoneBook.filter;
export const contactsSelector = state => state.phoneBook.contacts.items;
export const isLoggedInSelector = state => state.auth.isLoggedIn;
export const tokenSelector = state => state.auth.token;
export const userEmailSelector = state => state.auth.user.email;

export const filtredContactsSelector = createSelector(
  contactsSelector,
  contactsFilterSelector,
  (contacts, filter) => {
    return contacts?.filter(it => it.name.toLowerCase().includes(filter));
  }
);
