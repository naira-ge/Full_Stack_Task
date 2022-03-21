import { appKey } from 'config/constants/appKey';

export const setToken = (token, remember=false) => {
  if (token) {
    if (remember) {
      localStorage.setItem(appKey, JSON.stringify(token));
    }
    sessionStorage.setItem(appKey, JSON.stringify(token));
  };
};

export const getToken = () => {
  const tokenLocalStorage = localStorage.getItem(`${appKey}`);
  const tokenSessionStorage = sessionStorage.getItem(`${appKey}`);

  return tokenLocalStorage ? JSON.parse(tokenLocalStorage) : (
    tokenSessionStorage ? JSON.parse(tokenSessionStorage) : null
    );
};

export const removeToken = () => {
  localStorage.removeItem(appKey);
  sessionStorage.removeItem(appKey);
}