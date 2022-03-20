import {appKey} from 'config/constants/appKey';

export const setToken = () => {
  const token = localStorage.getItem(`${appKey}`);
  return token ? JSON.parse(token) : null;
};

export const getToken = (token) => {
  token && localStorage.setItem(appKey, JSON.stringify(token));
};

export const removeToken = () => {
  localStorage.removeItem(appKey);
}