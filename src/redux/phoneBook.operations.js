import { createAsyncThunk } from '@reduxjs/toolkit';
import { authContactsAxios } from './authContacts.api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await authContactsAxios.get('/contacts');

  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await authContactsAxios.post('/contacts', contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await authContactsAxios.delete(`/contacts/${id}`);
    return data;
  }
);
