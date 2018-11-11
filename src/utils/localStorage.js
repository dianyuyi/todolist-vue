export const setStorage = (key, value) => {
  if (!key) return;
  value = typeof value !== "string" ? JSON.stringify(value) : value;
  window.localStorage.setItem(key, value);
};

export const getStorage = key => {
  if (!key) return;
  return window.localStorage.getItem(key);
};
