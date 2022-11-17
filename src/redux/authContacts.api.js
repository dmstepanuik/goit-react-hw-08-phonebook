import axios from 'axios';

export const authContactsAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(tokenStr) {
    authContactsAxios.defaults.headers.Authorization = `Bearer ${tokenStr}`;
  },
  unset() {
    authContactsAxios.defaults.headers.Authorization = '';
  },
};
