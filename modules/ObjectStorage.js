const serialize = (value) => {
  return JSON.stringify(value);
};
const deSerialize = (value) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    console.error("Error in Parsing information in Object Store");
    return {};
  }
};
export default {
  setItem(key, value) {
    if (typeof value !== "object") {
      return new Error("Error in storing Object: Value should be of JSON");
    }
    return localStorage.setItem(key, serialize(value));
  },
  getItem(key, defaultValue) {
    return deSerialize(localStorage.getItem(key) || defaultValue);
  },
  removeItem(key) {
    return localStorage.removeItem(key);
  },
};
