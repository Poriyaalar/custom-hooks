import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import set from "lodash/set";
const useGlobalStorage = {
  setItem(key, value) {
    if (isEmpty(key)) {
      throw new Error(
        "GlobalStorageService~Invalid Param Exception: key should not be empty"
      );
    }
    set(window, ["global-storage", key], value);
  },
  getItem(key, defaultValue) {
    return get(window, ["global-storage", key], defaultValue);
  },
};
export default useGlobalStorage;
