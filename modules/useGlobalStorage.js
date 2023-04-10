import get from "lodash/get";
import set from "lodash/set";
import { useState } from "react";

// ----------------------------------------------------------------------

function useGlobalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return get(window, ["global-storage", key], defaultValue);
  });

  const setValueInLocalStorage = (newValue) => {
    setValue((currentValue) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;
      set(window, ["global-storage", key], result);
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
function useLocalGlobalStorage(key) {
  const value = () => {
    return get(window, ["global-storage", key]);
  };
  const getValue = value();
  return getValue;
}
function useSetGlobalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return get(window, ["global-storage", key], defaultValue);
  });
  const setValueInGlobalStorage = (newValue) => {
    setValue((currentValue) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;

      set(window, ["global-storage", key], result);

      return result;
    });
  };

  return [setValueInGlobalStorage];
}
export { useGlobalStorage, useLocalGlobalStorage, useSetGlobalStorage };
