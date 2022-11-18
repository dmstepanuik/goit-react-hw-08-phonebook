import axios from 'axios';

export const authContactsAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(tokenStr) {
    authContactsAxios.defaults.headers.common['Authorization'] = tokenStr
      ? `Bearer ${tokenStr}`
      : '';
  },
  unset() {
    this.set();
  },
};
