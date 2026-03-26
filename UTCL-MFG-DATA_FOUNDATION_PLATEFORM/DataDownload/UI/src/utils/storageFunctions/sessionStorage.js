export const addSessionStorage = (key, value) => {
  return sessionStorage.setItem(key, value);
};

export const removeSessionStorage = (key) => {
  return sessionStorage.removeItem(key);
};
