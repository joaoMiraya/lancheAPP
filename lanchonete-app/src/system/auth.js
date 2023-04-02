import jwtDecode from 'jsonwebtoken';

const TOKEN_KEY = 'token';

const getToken = () => localStorage.getItem(TOKEN_KEY);

const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);

const removeToken = () => localStorage.removeItem(TOKEN_KEY);

const decodeToken = (token) => jwtDecode(token);

const isAuthenticated = () => {
  const token = getToken();

  if (!token) {
    return false;
  }

  const { exp } = decodeToken(token);

  if (exp < Date.now() / 1000) {
    removeToken();
    return false;
  }

  return true;
};

export { getToken, setToken, removeToken, isAuthenticated };
