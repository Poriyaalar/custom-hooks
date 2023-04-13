import { useState, useEffect } from "react";

// ----------------------------------------------------------------------

function useLocalStorage(key: string, defaultValue: any): any[] {
  /**
   *
   *
   * @example
   * const [data,setData] = useLocalStorage("userdata",{userId:1,type:'guest'});
   *
   */
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e: any): void => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue: any) => {
    setValue((currentValue: any): any => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;

      localStorage.setItem(key, JSON.stringify(result));

      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
function useLocalStorageValue(key: string) {
  /**
   *
   *
   * @example
   * const data = useLocalStorage("userdata");
   * @returns {any} Is the media query active
   */

  const value = (): any => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? storedValue : JSON.parse(storedValue);
  };
  const getValue = value();
  return getValue;
}
function useSetLocalStorage(key: string, defaultValue: any) {
  /**
   *
   *
   * @example
   * const [setData] = useLocalStorage("userdata",{userId:1,type:'guest'});
   *
   */
  const [, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });
  const setValueInLocalStorage = (newValue: any) => {
    setValue((currentValue: any) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;

      localStorage.setItem(key, JSON.stringify(result));

      return result;
    });
  };

  return [setValueInLocalStorage];
}
export { useLocalStorage, useLocalStorageValue, useSetLocalStorage };
