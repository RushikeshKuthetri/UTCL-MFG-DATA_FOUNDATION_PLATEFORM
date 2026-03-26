export const addLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const deleteFromLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
