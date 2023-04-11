import get from "lodash/get";
import set from "lodash/set";
import { useState } from "react";

// ----------------------------------------------------------------------

function useGlobalStorage(key: string, defaultValue: any): any[] {
  const [value, setValue] = useState(() => {
    return get(window, ["global-storage", key], defaultValue);
  });

  const setValueInLocalStorage = (newValue: any): any => {
    setValue((currentValue: any) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;
      set(window, ["global-storage", key], result);
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
function useGlobalStorageValue(key: string): any {
  const value = () => {
    return get(window, ["global-storage", key]);
  };
  const getValue = value();
  return getValue;
}
function useSetGlobalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(() => {
    return get(window, ["global-storage", key], defaultValue);
  });
  const setValueInGlobalStorage = (newValue: any): any => {
    setValue((currentValue: any) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;

      set(window, ["global-storage", key], result);

      return result;
    });
  };

  return [setValueInGlobalStorage];
}
export { useGlobalStorage, useGlobalStorageValue, useSetGlobalStorage };
