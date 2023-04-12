import get from "lodash/get";
import set from "lodash/set";
import { useState } from "react";

// ----------------------------------------------------------------------

function useGlobalStorage(key: string, defaultValue: any): any[] {
  /**
   *
   *
   * @example
   * const [data,setData] = useGlobalStorage("userdata",{userId:1,type:'guest'});
   *
   */
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
  /**
   *
   *
   * @example
   * const data = useLocalStorage("userdata");
   * @returns {any} Is the media query active
   */
  const value = (): any => {
    return get(window, ["global-storage", key]);
  };
  const getValue = value();
  return getValue;
}
function useSetGlobalStorage(key: string, defaultValue: any) {
  /**
   *
   *
   * @example
   * const [setData] = useLocalStorage("userdata",{userId:1,type:'guest'});
   *
   */
  const [, setValue] = useState(() => {
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
