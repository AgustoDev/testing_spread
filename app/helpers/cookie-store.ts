import Cookies from 'js-cookie';

const setItem = (key: string, value: any) => {
  Cookies.set(key, value);
  return true;
};

const getItem = (key: string) => {
  return Cookies.get(key);
};

const removeItem = async (key: string) => {
  Cookies.remove(key);
  return true;
};

const cookieStorage = {
  setItem,
  getItem,
  removeItem,
};

export default cookieStorage;
