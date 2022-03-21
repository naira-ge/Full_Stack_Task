import {appKey} from 'config/constants/appKey';

export const getToken = () => {
  const token = localStorage.getItem(`${appKey}`);
  return token ? JSON.parse(token) : null;
};

export const setToken = ( token ) => {
  token && localStorage.setItem(appKey, JSON.stringify(token));
};

export const removeToken = () => {
  localStorage.removeItem(appKey);
}