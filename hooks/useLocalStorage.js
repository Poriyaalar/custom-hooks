"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetLocalStorage = exports.useLocalStorageValue = exports.useLocalStorage = void 0;
const react_1 = require("react");
// ----------------------------------------------------------------------
function useLocalStorage(key, defaultValue) {
    const [value, setValue] = (0, react_1.useState)(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue === null ? defaultValue : JSON.parse(storedValue);
    });
    (0, react_1.useEffect)(() => {
        const listener = (e) => {
            if (e.storageArea === localStorage && e.key === key) {
                setValue(JSON.parse(e.newValue));
            }
        };
        window.addEventListener("storage", listener);
        return () => {
            window.removeEventListener("storage", listener);
        };
    }, [key, defaultValue]);
    const setValueInLocalStorage = (newValue) => {
        setValue((currentValue) => {
            const result = typeof newValue === "function" ? newValue(currentValue) : newValue;
            localStorage.setItem(key, JSON.stringify(result));
            return result;
        });
    };
    return [value, setValueInLocalStorage];
}
exports.useLocalStorage = useLocalStorage;
function useLocalStorageValue(key) {
    const value = () => {
        const storedValue = localStorage.getItem(key);
        return storedValue === null ? storedValue : JSON.parse(storedValue);
    };
    const getValue = value();
    return getValue;
}
exports.useLocalStorageValue = useLocalStorageValue;
function useSetLocalStorage(key, defaultValue) {
    const [value, setValue] = (0, react_1.useState)(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue === null ? defaultValue : JSON.parse(storedValue);
    });
    const setValueInLocalStorage = (newValue) => {
        setValue((currentValue) => {
            const result = typeof newValue === "function" ? newValue(currentValue) : newValue;
            localStorage.setItem(key, JSON.stringify(result));
            return result;
        });
    };
    return [setValueInLocalStorage];
}
exports.useSetLocalStorage = useSetLocalStorage;
